import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import './default.scss';

// Components
import BaseFooter from '../../components/base/footer';

export interface DefaultLayoutProps {
    children: ReactNode;
}

const { Content } = Layout;

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => (
    <Layout className="appContent">
        <Content className="content">
            <div className="container">{children}</div>
        </Content>
        <BaseFooter />
    </Layout>
);

export default DefaultLayout;
