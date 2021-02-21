import { ITodoItem } from '../todo-item/todo-item.types';

export interface ITodosState {
    items: Array<ITodoItem>;
    isOpen: boolean;
    listType: ListType;
}

export enum ListType {
    All = 1,
    Active,
    Completed,
}
