import React from 'react';
import { IButtonProps } from './button.types';
import classNames from 'classnames';
import './button.scss';
import { Icon } from '../icon/icon';

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
                <div className="button__label">{this.props.label}</div>
                {this.props.icon && (
                    <div className="button__icon">
                        <Icon
                            type={this.props.icon}
                            className={this.props.iconClassName}
                        />
                    </div>
                )}
            </div>
        );
    }
}
