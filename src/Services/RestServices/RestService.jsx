import axios from "axios";

export const BASE_URL = 'http://localhost:7001/';
export const AUTH_BASE_URL = 'http://localhost:7010/';
export const OAUTH2_REDIRECT_URI = 'http://localhost:4000/oauth2/redirect'
export const GOOGLE_AUTH_URL = AUTH_BASE_URL + 'oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;

export const restAxios = axios.create(
    {
        baseURL: BASE_URL,
    }
)