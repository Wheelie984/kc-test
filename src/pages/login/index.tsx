import React from 'react';
import { notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import get from 'lodash/get';
import './login.scss';

// Components
import LoginForm from './form';

// Actions
import { auth } from '../../store/modules/auth/actions';

// Helpers
import { IFormData } from './form/interfaces';

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const loginInProcess: boolean = useSelector(state => get(state, 'auth.loading', false));

    /**
     * @returns {void}
     */
    const authSuccess = (): void => {
        history.push('/');
    };

    /**
     * @param {any} e
     * @returns {void}
     */
    const authFailure = (e: any): void => {
        if (e?.error?.message) {
            notification.error({
                message: 'Login is failed',
                description: e?.error?.message,
            });
            return;
        }

        notification.error({
            message: 'Login is failed',
            description: 'Something went wrong',
        });
    };

    /**
     * @param authParams
     * @returns {void}
     */
    const loginHandler = async (authParams: IFormData) => {
        try {
            await dispatch(auth(authParams));
            authSuccess();
        } catch (e) {
            console.error(e);
            authFailure(e);
        }
    };

    return (
        <div className="loginPage">
            <div className="loginPage__title">Welcome to the learning management system</div>
            <div className="loginPage__subTitle">Please log in to continue</div>
            <div className="loginPage__form">
                <LoginForm onLogin={loginHandler} loginInProcess={loginInProcess} />
            </div>
        </div>
    );
};

export default LoginPage;
