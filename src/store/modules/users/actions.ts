import { IActionCommonInterface } from '../interfaces';
import { GET_USERS } from './events';

/**
 * ==== GET USERS ====
 */

// eslint-disable-next-line import/prefer-default-export
export const getUsers = (): IActionCommonInterface => {
    const request: IActionCommonInterface = {
        type: GET_USERS,
        payload: {},
    };

    return request;
};
