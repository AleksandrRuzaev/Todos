import React from 'react';
import { ITodoItemProps } from './todo-item.types';
import { Button } from '../controls/button/button';
import { IconType } from '../controls/button/button.types';
import classNames from 'classnames';
import { Input } from '../controls/input/input';
import { STRINGS } from '../strings';
import './todo-item.scss';

export class TodoItem extends React.Component<
    ITodoItemProps,
    { isEdit: boolean; value: string }
> {
    constructor(props: ITodoItemProps) {
        super(props);

        this.state = { isEdit: false, value: '' };
    }

    componentDidMount() {
        this.setState({ value: this.props.title });
    }

    toggleEdit = (): void =>
        this.setState((prevState) => ({ isEdit: !prevState.isEdit }));

    handleRemove = (id: number): void => this.props.handleRemove(id);

    handleToggle = (id: number): void => this.props.toggleItem(id);

    handleDoubleClick = (): void => this.toggleEdit();

    handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState(() => ({ value: event.target.value }));
    };

    handleEdit = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (
            event.key === STRINGS.Events.EnterKey &&
            Boolean(this.state.value)
        ) {
            this.props.handleEdit({
                title: this.state.value,
                completed: false,
                id: this.props.id,
            });

            this.toggleEdit();
        }

        if (event.key === STRINGS.Events.EscapeKey) {
            this.setState({ value: this.props.title });
            this.toggleEdit();
        }
    };

    doubletapDeltaTime: number = 700;
    doubleTapTimer: number | null = null;

    doubleTap1Function: null | (() => void) = null;
    doubletap2Function: null | (() => void) = null;

    tap = (
        singleTapFunc: null | (() => void),
        doubleTapFunc: () => void,
    ): void => {
        if (this.doubleTapTimer === null) {
            this.doubleTapTimer = setTimeout(
                this.doubleTapTimeout,
                this.doubletapDeltaTime,
            );

            this.doubleTap1Function = singleTapFunc;
            this.doubletap2Function = doubleTapFunc;
        } else {
            clearTimeout(this.doubleTapTimer);
            this.doubleTapTimer = null;
            this.doubletap2Function && this.doubletap2Function();
        }
    };

    doubleTapTimeout = (): void => {
        this.doubleTap1Function && this.doubleTap1Function();
        this.doubleTapTimer = null;
    };

    render() {
        return (
            <div className="todo-item">
                {!this.state.isEdit && (
                    <div className="todo-item__toggle">
                        {!this.props.completed ? (
                            <div
                                className={classNames(
                                    'todo-item__checkbox',
                                    'todo-item__checkbox--empty',
                                )}
                                onClick={() => this.handleToggle(this.props.id)}
                            ></div>
                        ) : (
                            <Button
                                className={'todo-item__checkbox'}
                                icon={IconType.Checkbox}
                                iconClassName={'todo-item__checkbox-icon'}
                                onClick={() => this.handleToggle(this.props.id)}
                            />
                        )}
                    </div>
                )}
                {!this.state.isEdit ? (
                    <div
                        className={classNames(
                            'todo-item__content',
                            this.props.completed
                                ? 'todo-item__content--line-cross'
                                : null,
                        )}
                        onClick={() => this.tap(null, this.handleDoubleClick)}
                    >
                        {this.props.title}
                    </div>
                ) : (
                    <div className="todo-item__input-container">
                        <Input
                            className="todo-item__input-field"
                            name={`add-item-${this.props.id}`}
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                            onKeyDown={this.handleEdit}
                        />
                    </div>
                )}
                <div className="todo-item__remove">
                    <Button
                        className={'todo-item__cross'}
                        icon={IconType.Cross}
                        iconClassName={'todo-item__cross-icon'}
                        onClick={() => this.handleRemove(this.props.id)}
                    />
                </div>
            </div>
        );
    }
}
