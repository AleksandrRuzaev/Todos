import classNames from 'classnames';
import React from 'react';
import { formatString } from '../../utils';
import { Button } from '../controls/button/button';
import { STRINGS } from '../strings';
import { ListType } from '../todos/todos.types';
import './todos-footer.scss';
import { ITodoFooterProps } from './todos-footer.types';

export class TodosFooter extends React.Component<ITodoFooterProps, {}> {
    getCount = (): string => {
        return formatString(
            this.props.activeCount === 1
                ? STRINGS.TodosFooter.CountSingle
                : STRINGS.TodosFooter.Count,
            this.props.activeCount,
        );
    };

    handleAction = (label: string): void => {
        let actionType: ListType;

        switch (label) {
            case STRINGS.TodosFooter.Actions.Active:
                actionType = ListType.Active;
                break;
            case STRINGS.TodosFooter.Actions.Completed:
                actionType = ListType.Completed;
                break;
            case STRINGS.TodosFooter.Actions.All:
            default:
                actionType = ListType.All;
                break;
        }

        this.props.handleChangeListType(actionType);
    };

    render() {
        return (
            <div className={classNames('todos-footer')}>
                <div className="todos-footer__active-count">
                    {this.getCount()}
                </div>
                <div className="todos-footer__actions">
                    <Button
                        label={STRINGS.TodosFooter.Actions.All}
                        className={classNames(
                            'todos-footer__action',
                            this.props.actionType === ListType.All
                                ? 'todos-footer__action--active'
                                : null,
                            'todos-footer__action-all',
                        )}
                        onClick={() =>
                            this.handleAction(STRINGS.TodosFooter.Actions.All)
                        }
                    />
                    <Button
                        label={STRINGS.TodosFooter.Actions.Active}
                        className={classNames(
                            'todos-footer__action',
                            this.props.actionType === ListType.Active
                                ? 'todos-footer__action--active'
                                : null,
                            'todos-footer__action-active',
                        )}
                        onClick={() =>
                            this.handleAction(
                                STRINGS.TodosFooter.Actions.Active,
                            )
                        }
                    />
                    <Button
                        label={STRINGS.TodosFooter.Actions.Completed}
                        className={classNames(
                            'todos-footer__action',
                            this.props.actionType === ListType.Completed
                                ? 'todos-footer__action--active'
                                : null,
                            'todos-footer__action-completed',
                        )}
                        onClick={() =>
                            this.handleAction(
                                STRINGS.TodosFooter.Actions.Completed,
                            )
                        }
                    />
                </div>
                {
                    <div
                        className={classNames(
                            'todos-footer__complete-action',
                            !this.props.completedCount
                                ? 'todos-footer__complete-action--hidden'
                                : null,
                        )}
                        onClick={() => this.props.handleClearCompleted()}
                    >
                        {STRINGS.TodosFooter.Actions.ClearCompleted}
                    </div>
                }
            </div>
        );
    }
}
