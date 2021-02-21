export interface ITodoItemProps extends ITodoItem {
    handleRemove: (id: number) => void;
    toggleItem: (id: number) => void;
}

export interface ITodoItem {
    id: number;
    title: string;
    completed: boolean;
}
