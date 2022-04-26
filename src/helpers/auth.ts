import Cookies from 'js-cookie';

/**
 * @returns {boolean}
 */
export const userIsAuth = (): boolean => {
    return !!Cookies.get('jwt_access_token');
};
