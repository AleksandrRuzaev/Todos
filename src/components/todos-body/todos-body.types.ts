import { ITodoItem } from '../todo-item/todo-item.types';

export interface ITodosBodyProps {
    items: Array<ITodoItem>;
    handleRemove: (id: number) => void;
    toggleItem: (id: number) => void;
}

export interface ITodosBodyState {
    items: Array<ITodoItem>;
}
