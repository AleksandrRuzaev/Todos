import React from 'react';
import { TodoItem } from '../todo-item/todo-item';
import { ITodoItem } from '../todo-item/todo-item.types';
import { ITodosBodyProps, ITodosBodyState } from './todos-body.types';
import './todos-body.scss';

export class TodosBody extends React.Component<
    ITodosBodyProps,
    ITodosBodyState
> {
    constructor(props: ITodosBodyProps) {
        super(props);

        this.state = { items: [] };
    }

    componentDidMount() {
        this.setState(() => ({ items: this.props.items }));
    }

    render() {
        return (
            <div className="todos-body">
                {this.props.items.map((item: ITodoItem, index: number) => (
                    <TodoItem
                        {...item}
                        key={index}
                        handleRemove={this.props.handleRemove}
                        toggleItem={this.props.toggleItem}
                    />
                ))}
            </div>
        );
    }
}
