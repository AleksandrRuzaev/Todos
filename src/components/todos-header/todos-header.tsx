import React from 'react';
import { ITodoHeaderProps } from './todos-header.types';
import './todos-header.scss';

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
            }));
        }
    };

    handleToggle = (): void => {
        this.props.toggleList();
    };

    render() {
        return (
            <div className="todos-header">
                {Boolean(this.state.count) && (
                    <div
                        className="todos-header__toggle"
                        onClick={() => this.handleToggle()}
                    >
                        arrow
                    </div>
                )}
                <div className="todos-header__field">
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        onKeyDown={(e) => this.handleAdd(e)}
                    />
                </div>
                <div className="todos-header__button">
                    {/* <Button
                        onClick={this.handleAdd}
                        label={'Add'}
                        type={ButtonType.Common}
                    /> */}
                </div>
            </div>
        );
    }
}
