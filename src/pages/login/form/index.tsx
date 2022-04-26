import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

// Graphics
import UsernameIcon from '../../../assets/images/icons/user.svg';
import PasswordIcon from '../../../assets/images/icons/password.svg';

// Config
import {
    FORM_VALIDATION_RULES,
    PASSWORD_FIELD_NAME,
    REMEMBER_FIELD_NAME,
    USERNAME_FIELD_NAME,
} from './config';

// Helpers
import { IFormData } from './interfaces';

export interface ILoginFormProps {
    onLogin: (formData: IFormData) => void;
    loginInProcess: boolean;
}

const LoginForm: React.FC<ILoginFormProps> = ({ onLogin, loginInProcess }) => {
    return (
        <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={(formData: IFormData) => {
                onLogin(formData);
            }}
            autoComplete="off"
        >
            <Form.Item
                name={USERNAME_FIELD_NAME}
                rules={FORM_VALIDATION_RULES[USERNAME_FIELD_NAME]}
            >
                <Input
                    prefix={
                        <img
                            className="loginPage__formIcon"
                            src={UsernameIcon}
                            alt="Username icon"
                        />
                    }
                    placeholder="Username"
                    size="large"
                />
            </Form.Item>

            <Form.Item
                name={PASSWORD_FIELD_NAME}
                rules={FORM_VALIDATION_RULES[PASSWORD_FIELD_NAME]}
            >
                <Input.Password
                    prefix={
                        <img
                            className="loginPage__formIcon"
                            src={PasswordIcon}
                            alt="Password icon"
                        />
                    }
                    placeholder="Password"
                    size="large"
                    visibilityToggle={false}
                />
            </Form.Item>

            <Form.Item name={REMEMBER_FIELD_NAME} valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    block
                    size="large"
                    loading={loginInProcess}
                >
                    Log in
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
