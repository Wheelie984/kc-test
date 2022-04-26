import { FormRules } from '../../../helpers/interfaces';

export const USERNAME_FIELD_NAME: string = 'username';
export const PASSWORD_FIELD_NAME: string = 'password';
export const REMEMBER_FIELD_NAME: string = 'remember';

export const FORM_VALIDATION_RULES: FormRules = {
    [USERNAME_FIELD_NAME]: [{ required: true, message: 'Please input your username!' }],
    [PASSWORD_FIELD_NAME]: [{ required: true, message: 'Please input your password!' }],
};
