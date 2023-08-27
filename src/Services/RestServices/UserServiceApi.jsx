import { restAxios } from './RestService'

export const signUp = (signup) => {
    return restAxios
        .post('user-service/auth/register', signup)
        .then((response) => response.data);
}

export const verifyOtp = (email, otp) => {
    return restAxios
        .post("user-service/auth/otp", null, {
            headers: {
                'otp': otp
            },
            params: {
                'email': email
            }
        })
        .then((response) => response.data);
}

export const resendOtp = (userId) => {
    return restAxios
        .get("user-service/resend-otp?userid=" + userId)
        .then((response) => response.data);
}