import React from 'react';

// Components
import BaseStatus from '../../../components/base/status';

const columns = [
    {
        title: 'Status',
        dataIndex: 'status',
        render: (status: string) => <BaseStatus status={status} />,
    },
    {
        title: 'Login',
        dataIndex: 'login',
        render: (login: string, item: any) => (
            <>
                <div>{login}</div>
                <div>{item.fullName}</div>
            </>
        ),
    },
    {
        title: 'Group',
        dataIndex: 'group',
    },
];

export default columns;
