import { IActionCommonInterface } from '../interfaces';
import { GET_USERS } from './events';

/**
 * ==== GET USERS ====
 */
export const getUsers = (): IActionCommonInterface => {
    const request: IActionCommonInterface = {
        type: GET_USERS,
        payload: {},
    };

    return request;
};
