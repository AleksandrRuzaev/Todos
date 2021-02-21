import React from 'react';
import { ITodoItemProps } from './todo-item.types';
import './todo-item.scss';

export class TodoItem extends React.Component<ITodoItemProps, {}> {
    constructor(props: ITodoItemProps) {
        super(props);
    }

    handleRemove = (id: number) => this.props.handleRemove(id);

    handleToggle = (id: number) => this.props.toggleItem(id);

    render() {
        return (
            <div className="todo-item">
                <div
                    className="todo-item__toggle"
                    onClick={() => this.handleToggle(this.props.id)}
                >
                    {this.props.completed ? '-' : '+'}
                </div>
                <div className="todo-item__content">{this.props.title}</div>
                <div
                    className="todo-item__remove"
                    onClick={() => this.handleRemove(this.props.id)}
                >
                    X
                </div>
            </div>
        );
    }
}
