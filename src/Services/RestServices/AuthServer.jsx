import { restAxios } from './RestService'

export const loginUser = (login) => {
    return restAxios.post("/auth-server/login", login)
            .then((response) => response);
}