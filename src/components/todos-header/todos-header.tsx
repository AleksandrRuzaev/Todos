import React from 'react';
import { ITodoHeaderProps } from './todos-header.types';
import './todos-header.scss';
import { Input } from '../controls/input/input';
import { STRINGS } from '../strings';

const ENTER = 'Enter';

export class TodosHeader extends React.Component<
    ITodoHeaderProps,
    { value: string; lastId: number; count: number }
> {
    constructor(props: ITodoHeaderProps) {
        super(props);

        this.state = { value: '', lastId: 0, count: 0 };
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            lastId: this.props.lastId,
            count: this.props.count,
        });
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState(() => ({ value: event.target.value }));
    };

    handleAdd = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === ENTER) {
            this.props.handleAdd({
                title: this.state.value,
                completed: false,
                id: this.state.lastId + 1,
            });

            this.setState((prevState) => ({
                lastId: prevState.lastId + 1,
                count: prevState.count + 1,
                value: '',
            }));
        }
    };

    handleToggle = (): void => {
        this.props.toggleList();
    };

    render() {
        return (
            <div className="todos-header">
                {Boolean(this.props.count) && (
                    <div
                        className="todos-header__toggle"
                        onClick={() => this.handleToggle()}
                    >
                        arrow
                    </div>
                )}
                <div className="todos-header__field">
                    <Input
                        className="todos-header__input-field"
                        name="add-item"
                        type="text"
                        placeholder={STRINGS.TodosHeader.InputPlaceholder}
                        value={this.state.value}
                        onChange={this.handleChange}
                        onKeyDown={this.handleAdd}
                    />
                </div>
            </div>
        );
    }
}
