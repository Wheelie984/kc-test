import React from 'react';
import clsx from 'clsx';
import { ICONS_BY_STATUS } from './config';
import './status.scss';

export interface IBaseStatusProps {
    status: string;
}

const BaseStatus: React.FC<IBaseStatusProps> = ({ status }) => {
    const Icon: any = ICONS_BY_STATUS[status] || ICONS_BY_STATUS.default;

    return (
        <div
            className={clsx('baseStatus', {
                'baseStatus--ok': status === 'ok',
                'baseStatus--fail': status === 'fail',
            })}
        >
            <div className="baseStatus__icon">
                <Icon />
            </div>
        </div>
    );
};

export default BaseStatus;
