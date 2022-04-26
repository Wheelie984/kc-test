import React, { ReactNode } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'antd/dist/antd.css';

// Config
import routes from './router';

// Helpers
import { userIsAuth } from './helpers/auth';
import { IRouteItem } from './router/interfaces';

/**
 *
 * @param {IRouteItem} route
 * @returns {ReactNode}
 */
const renderRoute = (route: IRouteItem) => (): ReactNode => {
    const isAuth: boolean = userIsAuth();

    if (route.needAuth && !isAuth) {
        return <Redirect key="login" from={route.path} to="/login" />;
    }

    if (route.isAuthPage && isAuth) {
        return <Redirect key="main" from={route.path} to="/" />;
    }

    const RouteLayout: any = route.layout;
    const RouteComponent: any = route.component;

    return (
        <>
            <Helmet>
                <title>{route.title}</title>
            </Helmet>
            <RouteLayout routeName={route.name}>
                <RouteComponent routes={route.routes} routeName={route.name} />
            </RouteLayout>
        </>
    );
};

const App: React.FC = () => {
    return (
        <div className="App">
            <Helmet>
                <title>LMC</title>
                <link rel="icon" type="image/png" href="app-icon.png" sizes="16x16" />
            </Helmet>

            <Switch>
                {routes.map(route => (
                    <Route
                        key={route.name}
                        path={route.path}
                        exact={route.exact}
                        render={renderRoute(route)}
                    />
                ))}
            </Switch>
        </div>
    );
};

export default App;
