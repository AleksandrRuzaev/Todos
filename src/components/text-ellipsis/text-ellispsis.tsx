import classNames from 'classnames';
import React from 'react';
import { ITextEllipsisProps, ITextEllipsisState } from './text-ellipsis.types';
import './text-ellipsis.scss';

export class TextEllipsis extends React.Component<
    ITextEllipsisProps,
    ITextEllipsisState
> {
    private elementRef: React.RefObject<HTMLDivElement>;

    constructor(props: ITextEllipsisProps) {
        super(props);

        this.state = {
            hoverStatus: false,
            top: 0,
            left: 0,
        };

        this.elementRef = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('resize', this.compareSize);
        this.elementRef.current &&
            this.elementRef.current.addEventListener(
                'mouseenter',
                this.handleMouseEnter,
            );
    }

    componentDidUpdate() {
        this.compareSize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.compareSize);
        this.elementRef.current &&
            this.elementRef.current.removeEventListener(
                'mouseenter',
                this.handleMouseEnter,
            );
    }

    compareSize = (): void => {
        const ref = this.elementRef.current;
        const compare = !!ref && ref.scrollWidth > ref.clientWidth;

        if (compare !== this.state.hoverStatus) {
            this.setState(() => ({ hoverStatus: compare }));
        }
    };

    handleMouseEnter = (): void => {
        const ref = this.elementRef.current;
        const rect = ref?.getBoundingClientRect();

        if (rect) {
            this.setState(() => ({
                top: rect.top + 1.1 * rect.height,
                left: rect.left,
            }));
        }
    };

    render() {
        return (
            <div
                className={classNames(
                    'text-ellipsis',
                    this.state.hoverStatus && 'text-ellipsis--enabled',
                    this.props.className,
                )}
                style={{ maxWidth: this.props.maxWidth ?? '100%' }}
            >
                <div
                    className={classNames('text-ellipsis__content')}
                    ref={this.elementRef}
                >
                    {this.props.children}
                </div>
                <div
                    style={{ top: this.state.top, left: this.state.left }}
                    className={classNames('text-ellipsis__tooltip')}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}
