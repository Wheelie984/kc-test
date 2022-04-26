import { IActionCommonInterface } from '../interfaces';
import { AUTH } from './events';

/**
 * ==== AUTH ====
 */
export interface IAuthParams {
    username: string;
    password: string;
    remember: boolean;
}

export const auth = (params: IAuthParams): IActionCommonInterface => {
    const request: IActionCommonInterface = {
        type: AUTH,
        payload: {
            data: { ...params },
        },
    };

    return request;
};
