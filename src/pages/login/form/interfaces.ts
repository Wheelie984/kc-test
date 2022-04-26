export interface IFormData {
    username: string;
    password: string;
    remember: boolean;
    [key: string]: string | number | boolean;
}
