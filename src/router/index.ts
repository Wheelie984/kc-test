// Helpers
import { IRouteItem } from './interfaces';

// Layouts
import DefaultLayout from '../layouts/default';
import AuthLayout from '../layouts/auth';

// Pages
import LoginPage from '../pages/login';
import UsersListPage from '../pages/usersList';

const router: IRouteItem[] = [
    {
        path: '/',
        name: 'users',
        component: UsersListPage,
        layout: DefaultLayout,
        title: 'LMS - User list',
        needAuth: true,
        exact: true,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
        layout: AuthLayout,
        title: 'LMS - Login',
        exact: true,
        needAuth: false,
        isAuthPage: true,
    },
];

export default router;
