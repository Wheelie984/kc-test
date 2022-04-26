import React, { ReactNode } from 'react';
import './auth.scss';

// Components
import BaseLogo from '../../components/base/logo';

export interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => (
    <div className="authLayout">
        <div className="authContainer">
            <BaseLogo />
            <div className="authContainer__wrap">{children}</div>
        </div>
    </div>
);

export default AuthLayout;
