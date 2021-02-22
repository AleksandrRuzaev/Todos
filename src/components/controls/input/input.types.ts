export interface IinputProps {
    label?: string;
    name: string;
    type?: string;
    value?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    className?: string;
    placeholder?: string;
}
