export interface IButtonProps {
    onClick: () => void;
    className?: string;
    label?: string;
    type?: ButtonType;
    disabled?: boolean;
    icon?: IconType;
    iconClassName?: string;
}

export enum ButtonType {
    Common = 'common',
}

export enum IconType {
    Checkbox = 'checkbox',
    Cross = 'cross',
}
