import { ListType } from '../todos/todos.types';

export interface ITodoFooterProps {
    activeCount: number;
    completedCount: number;
    handleChangeListType: (type: ListType) => void;
    handleClearCompleted: () => void;
    actionType: ListType;
}
