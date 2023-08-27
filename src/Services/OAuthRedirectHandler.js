import { Navigate, useLocation } from 'react-router-dom'

export const ACCESS_TOKEN = 'accessToken';

const OAuthRedirectHandler = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const getUrlParameter = (name) => {
        return searchParams.get(name)
    }

    const token = getUrlParameter('accessToken');
    const error = getUrlParameter('error');

    if (token) {
        localStorage.setItem(ACCESS_TOKEN, token);
        return <Navigate to={{
            pathname: "/profile",
            state: { from: location }
        }} />;
    } else {
        return <Navigate to={{
            pathname: "/login",
            state: {
                from: location,
                error: error
            }
        }} />;
    }
}

export default OAuthRedirectHandler