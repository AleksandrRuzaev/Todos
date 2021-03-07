export interface ITextEllipsisProps {
    children?: React.ReactNode;
    isTooltipActive?: boolean;
    maxWidth?: number;
    className?: string;
}

export interface ITextEllipsisState {
    hoverStatus: boolean;
    top: number;
    left: number;
}
