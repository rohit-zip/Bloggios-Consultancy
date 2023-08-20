import {restAxios} from './RestService'

export const signUp = (signup) => {
    return restAxios
        .post('user-service/register', signup)
        .then((response) => response.data);
}