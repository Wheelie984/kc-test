import Cookies from 'js-cookie';

/**
 * @returns {boolean}
 */
// eslint-disable-next-line import/prefer-default-export
export const userIsAuth = (): boolean => {
    return !!Cookies.get('jwt_access_token');
};
