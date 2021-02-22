import classNames from 'classnames';
import React from 'react';
import { IinputProps } from './input.types';
import './input.scss';

export class Input extends React.Component<IinputProps, {}> {
    render() {
        return (
            <div className="input">
                {this.props.label && <label htmlFor={this.props.name}></label>}
                <input
                    name={this.props.name}
                    type={this.props.type}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}
                    onKeyDown={this.props.onKeyDown}
                    className={classNames('input__input', this.props.className)}
                />
            </div>
        );
    }
}
