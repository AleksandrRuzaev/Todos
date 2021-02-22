import React from 'react';
import { ITodoItemProps } from './todo-item.types';
import './todo-item.scss';
import { Button } from '../controls/button/button';
import { IconType } from '../controls/button/button.types';
import classNames from 'classnames';

export class TodoItem extends React.Component<ITodoItemProps, {}> {
    constructor(props: ITodoItemProps) {
        super(props);
    }

    handleRemove = (id: number) => this.props.handleRemove(id);

    handleToggle = (id: number) => this.props.toggleItem(id);

    render() {
        return (
            <div className="todo-item">
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
                <div
                    className={classNames(
                        'todo-item__content',
                        this.props.completed
                            ? 'todo-item__content--line-cross'
                            : null,
                    )}
                >
                    {this.props.title}
                </div>
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
