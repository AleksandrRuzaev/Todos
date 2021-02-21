export interface IButtonProps {
    onClick: () => void;
    className?: string;
    label?: string;
    type?: ButtonType;
    disabled?: boolean;
}

export enum ButtonType {
    Common = 'common',
}
