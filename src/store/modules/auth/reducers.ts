import { IActionCommonInterface } from '../interfaces';
import { AUTH, AUTH_SUCCESS, AUTH_FAILURE } from './events';

// eslint-disable-next-line import/prefer-default-export
export const auth = (state = null, action: IActionCommonInterface) => {
    switch (action.type) {
        case AUTH:
            return {
                loading: true,
            };
        case AUTH_SUCCESS:
            return action.payload;
        case AUTH_FAILURE:
            return null;
        default:
            return state;
    }
};
