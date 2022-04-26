import Cookies from 'js-cookie';

import { FAILURE, SUCCESS } from '../../config/api';
import { IActionCommonInterface } from '../modules/interfaces';

/**
 * It's server...
 */
const FAKE_HTTP = (config: IActionCommonInterface) => {
    // Auth
    if (config.type === 'AUTH') {
        const username = config.payload?.data?.username;
        const password = config.payload?.data?.password;
        const remember = config.payload?.data?.remember;

        if (username === 'user' && password === 'user') {
            const cookieConifg: Cookies.CookieAttributes = {
                path: '/',
            };

            if (remember) {
                cookieConifg.expires = 7;
            }

            return new Promise(resolve => {
                setTimeout(() => {
                    Cookies.set('jwt_access_token', 'yep.this.istoken', cookieConifg);
                    resolve({
                        result: true,
                    });
                }, 1000);
            });
        }
        return new Promise((_resolve, reject) => {
            setTimeout(() => {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject({
                    error: {
                        message: 'Incorrect username or password',
                    },
                    result: false,
                });
            }, 1000);
        });
    }

    // Users
    if (config.type === 'GET_USERS') {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    data: [
                        {
                            status: 'ok',
                            login: 'kctest2201',
                            fullName: 'Bernardo Santino',
                            group: 'Default group',
                            key: '1',
                        },
                        {
                            status: 'ok',
                            login: 'kctest2202',
                            fullName: 'Gergio Quebedo',
                            group: 'Default group',
                            key: '2',
                        },
                        {
                            status: 'ok',
                            login: 'kctest2203',
                            fullName: 'Rob Shnneider',
                            group: 'Default group',
                            key: '3',
                        },
                        {
                            status: 'ok',
                            login: 'kctest2204',
                            fullName: 'Terry Cruz',
                            group: 'Default group',
                            key: '4',
                        },
                        {
                            status: 'ok',
                            login: 'kctest2205',
                            fullName: 'David Smith',
                            group: 'Default group',
                            key: '5',
                        },
                        {
                            status: 'ok',
                            login: 'kctest2206',
                            fullName: 'David Tennant',
                            group: 'Default group',
                            key: '6',
                        },
                        {
                            status: 'ok',
                            login: 'kctest2207',
                            fullName: 'Matt Smith',
                            group: 'Default group',
                            key: '7',
                        },
                        {
                            status: 'ok',
                            login: 'kctest2208',
                            fullName: 'Peter Capaldi',
                            group: 'Default group',
                            key: '8',
                        },
                        {
                            status: 'fail',
                            login: 'kctest2209',
                            fullName: 'Christopher Eccleston',
                            group: 'Default group',
                            key: '9',
                        },
                        {
                            status: 'ok',
                            login: 'kctest2210',
                            fullName: 'Jodie Whittaker',
                            group: 'Default group',
                            key: '10',
                        },
                        {
                            status: 'ok',
                            login: 'kctest2211',
                            fullName: 'Bryan Cranston',
                            group: 'Default group',
                            key: '11',
                        },
                        {
                            status: 'ok',
                            login: 'kctest2212',
                            fullName: 'Anna Gunn',
                            group: 'Default group',
                            key: '12',
                        },
                        {
                            status: 'ok',
                            login: 'kctest2213',
                            fullName: 'Aaron Paul',
                            group: 'Default group',
                            key: '13',
                        },
                        {
                            status: 'ok',
                            login: 'kctest2214',
                            fullName: 'Dean Norris',
                            group: 'Default group',
                            key: '14',
                        },
                        {
                            status: 'ok',
                            login: 'kctest2215',
                            fullName: 'Betsy Brandt',
                            group: 'Default group',
                            key: '15',
                        },
                    ],
                    result: true,
                });
            }, 2000);
        });
    }

    return new Promise((_resolve, reject) => {
        setTimeout(() => {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject({
                error: {
                    message: 'Method not found',
                },
                result: false,
            });
        }, 1000);
    });
};

/**
 * @param res
 * @param action
 * @param next
 * @returns {any}
 */
const handleResponse = (
    res: any,
    action: IActionCommonInterface,
    next: (params: IActionCommonInterface) => void,
) => {
    next({
        type: `${action.type}_${SUCCESS}`,
        payload: {
            data: res.data,
        },
    });

    return res;
};

/**
 * @param err
 * @param action
 * @param next
 * @returns {any}
 */
const handleErrors = (
    err: any,
    action: IActionCommonInterface,
    next: (params: IActionCommonInterface) => void,
) => {
    next({
        type: `${action.type}_${FAILURE}`,
        payload: err,
    });
    return Promise.reject(err);
};

const Api = () => (next: (params: IActionCommonInterface) => void) => (
    action: IActionCommonInterface,
) => {
    next(action);

    return FAKE_HTTP(action)
        .then((resp: any) => handleResponse(resp, action, next))
        .catch((error: any) => handleErrors(error, action, next));
};

export default Api;
