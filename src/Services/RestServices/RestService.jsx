import axios from "axios";

export const BASE_URL = 'http://localhost:7001/';

export const restAxios = axios.create(
    {
        baseURL: BASE_URL,
    }
)