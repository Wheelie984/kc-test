import { IActionCommonInterface } from '../interfaces';
import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILURE } from './events';

export const users = (state = null, action: IActionCommonInterface) => {
    switch (action.type) {
        case GET_USERS:
            return {
                loading: true,
            };
        case GET_USERS_SUCCESS:
            return action.payload;
        case GET_USERS_FAILURE:
            return null;
        default:
            return state;
    }
};
