import classNames from 'classnames';
import React, { createRef } from 'react';
import { IinputProps } from './input.types';
import './input.scss';
import { STRINGS } from '../../strings';

export class Input extends React.Component<IinputProps, { value: string }> {
    inputRef: React.RefObject<HTMLInputElement>;

    constructor(props: IinputProps) {
        super(props);

        this.state = { value: '' };

        this.inputRef = createRef<HTMLInputElement>();
    }

    componentDidMount() {
        this.setState({ value: this.props.value ?? '' });

        this.inputRef.current?.focus();
    }

    handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (
            event.key === STRINGS.Events.EscapeKey ||
            event.key === STRINGS.Events.EnterKey
        ) {
            this.setState({ value: '' });
        }

        this.props.onKeyDown(event);
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ value: event.target.value });
        this.props.onChange(event);
    };

    render() {
        return (
            <div className="input">
                {this.props.label && <label htmlFor={this.props.name}></label>}
                <input
                    ref={this.inputRef}
                    name={this.props.name}
                    type={this.props.type}
                    value={this.state.value}
                    placeholder={this.props.placeholder}
                    onChange={(event) => this.handleChange(event)}
                    onKeyDown={(event) => this.handleKeyPress(event)}
                    className={classNames('input__input', this.props.className)}
                />
            </div>
        );
    }
}
