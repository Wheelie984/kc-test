import React from 'react';
import { CheckOutlined, StopOutlined, QuestionOutlined } from '@ant-design/icons';

export interface IIconsByStatus {
    [key: string]: React.FC;
}

// eslint-disable-next-line import/prefer-default-export
export const ICONS_BY_STATUS: IIconsByStatus = {
    ok: CheckOutlined,
    fail: StopOutlined,
    default: QuestionOutlined,
};
