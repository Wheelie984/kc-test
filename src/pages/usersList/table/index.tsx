import React from 'react';
import { Table } from 'antd';

// Config
import columns from '../../../config/tables/users';

export interface IUsersListTableProps {
    loading: boolean;
    data: any[] | null;
}

const UsersListTable: React.FC<IUsersListTableProps> = ({ loading, data }) => {
    return (
        <Table
            columns={columns}
            dataSource={data || []}
            loading={loading}
            bordered={false}
            showHeader={false}
            pagination={{
                position: ['bottomCenter'],
                size: 'small',
                defaultPageSize: 5,
            }}
        />
    );
};

export default UsersListTable;
