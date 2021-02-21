import React from 'react';
import { IButtonProps } from './button.types';
import classNames from 'classnames';
import './button.scss';

export class Button extends React.Component<IButtonProps> {
    handleclick = (): void => {
        this.props.onClick && this.props.onClick();
    };

    render() {
        return (
            <div
                onClick={() => this.handleclick()}
                className={classNames(
                    'button',
                    this.props.type && `button--${this.props.type}`,
                    this.props.className,
                )}
            >
                {this.props.label}
            </div>
        );
    }
}
