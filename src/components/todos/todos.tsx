import React from 'react';
import { STRINGS } from '../strings';
import { ITodoItem } from '../todo-item/todo-item.types';
import { TodosBody } from '../todos-body/todos-body';
import { TodosHeader } from '../todos-header/todos-header';
import { ITodosState, ListType } from './todos.types';
import './todos.scss';
import { TodosFooter } from '../todos-footer/todos-footer';

export class Todos extends React.Component<{}, ITodosState> {
    constructor(props: ITodosState) {
        super(props);

        this.state = { items: [], isOpen: true, listType: ListType.All };
    }

    handleAdd = (todo: ITodoItem): void => {
        this.setState(() => ({ items: [...this.state.items, todo] }));
    };

    handleRemove = (id?: number, removeCompleted?: boolean): void => {
        this.setState((prevState: ITodosState) => {
            let result: Array<ITodoItem> = prevState.items;

            if (id) {
                result = result.filter((item: ITodoItem) => item.id !== id);
            }

            if (removeCompleted) {
                result = result.filter((item: ITodoItem) => !item.completed);
            }

            return {
                items: result,
            };
        });
    };

    handleChangeListType = (type: ListType): void => {
        this.setState({ listType: type });
    };

    toggleItem = (id: number): void => {
        this.setState((prevState: ITodosState) => {
            return {
                ...prevState,
                items: [
                    ...prevState.items.map((item) => {
                        let result: ITodoItem = item;

                        if (item.id === id) {
                            result = {
                                ...result,
                                completed: !result.completed,
                            };
                        }

                        return result;
                    }),
                ],
            };
        });
    };

    toggleList = (): void => {
        this.setState((prevState: ITodosState) => ({
            ...this.state,
            isOpen: !prevState.isOpen,
        }));
    };

    getNextId = (): number => {
        return Boolean(this.state.items.length)
            ? Math.max(...this.state.items.map((item: ITodoItem) => item.id))
            : 0;
    };

    getItems = (): Array<ITodoItem> => {
        let result: Array<ITodoItem> = [...this.state.items];

        switch (this.state.listType) {
            case ListType.Active:
                result = result.filter((todo: ITodoItem) => !todo.completed);
                break;
            case ListType.Completed:
                result = result.filter((todo: ITodoItem) => todo.completed);
            default:
                break;
        }

        return result;
    };

    render() {
        return (
            <div className="todos">
                <h1 className="todos__title">{STRINGS.TodosTitle.Title}</h1>
                <div className="todos__body">
                    <TodosHeader
                        handleAdd={(todo: ITodoItem) => this.handleAdd(todo)}
                        toggleList={() => this.toggleList()}
                        lastId={this.getNextId()}
                        count={this.state.items.length}
                    />
                    {this.state.isOpen && (
                        <TodosBody
                            items={this.getItems()}
                            handleRemove={(id: number) => {
                                this.handleRemove(id);
                            }}
                            toggleItem={(id: number) => {
                                this.toggleItem(id);
                            }}
                        />
                    )}
                    <TodosFooter
                        activeCount={
                            this.state.items.filter(
                                (item: ITodoItem) => !item.completed,
                            ).length
                        }
                        actionType={this.state.listType}
                        handleChangeListType={(type: ListType) => {
                            this.handleChangeListType(type);
                        }}
                        handleClearCompleted={() => {
                            this.handleRemove(undefined, true);
                        }}
                    />
                </div>
            </div>
        );
    }
}
