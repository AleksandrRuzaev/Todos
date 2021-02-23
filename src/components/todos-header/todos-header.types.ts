import { ITodoItem } from '../todo-item/todo-item.types';

export interface ITodoHeaderProps {
    handleAdd: (todo: ITodoItem) => void;
    toggleList: () => void;
    lastId: number;
    count: number;
    isOpen: boolean;
}
