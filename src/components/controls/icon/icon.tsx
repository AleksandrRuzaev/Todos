import React from 'react';
import { IconType } from '../button/button.types';
import Checkbox from '../../../assets/icons/checkbox.svg';
import Cross from '../../../assets/icons/cross.svg';
import classNames from 'classnames';
import './icon.scss';

export class Icon extends React.Component<{
    type?: IconType;
    className?: string;
}> {
    getIcon = () => {
        switch (this.props.type) {
            case IconType.Checkbox:
                return <Checkbox />;
            case IconType.Cross:
                return <Cross />;
            default:
                return null;
        }
    };

    render() {
        return (
            <div className={classNames('icon', this.props.className)}>
                {this.getIcon()}
            </div>
        );
    }
}
