import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';
import './footer.scss';

const BaseFooter: React.FC = () => {
    const history = useHistory();

    /**
     * @returns {void}
     */
    const logoutHandler = (): void => {
        Cookies.remove('jwt_access_token');
        history.push('/login');
    };

    return (
        <div className="baseFooter">
            <Button type="text" icon={<LogoutOutlined />} onClick={logoutHandler}>
                Log out
            </Button>
        </div>
    );
};

export default BaseFooter;
