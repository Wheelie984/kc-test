import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import get from 'lodash/get';
import './usersList.scss';

// Actions
import { getUsers } from '../../store/modules/users/actions';

// Components
import UsersListTable from './table';

const UsersListPage: React.FC = () => {
    const dispatch = useDispatch();

    // Users
    const usersIsLoading: boolean = useSelector(state => get(state, 'users.loading', false));
    const usersData = useSelector(state => get(state, 'users.data', null));

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <div className="usersList">
            <div className="usersList__title">User List</div>
            <div className="usersList__content">
                <UsersListTable loading={usersIsLoading} data={usersData} />
            </div>
        </div>
    );
};

export default UsersListPage;
