import axios from 'axios';
import {
    loginFailed,
    loginStart,
    loginSuccess,
    logoutStart,
    logoutSuccess,
    registerFailed,
    registerStart,
    registerSuccess,
} from './authSlice';

export const loginUser = async (user, dispath, navigate) => {
    dispath(loginStart());
    try {
        const res = await axios.post('api/users/signin', user);
        dispath(loginSuccess(res.data));
        navigate('/');
    } catch (error) {
        dispath(loginFailed());
        return error.response.data;
    }
};

export const registerUser = async (user, dispath, navigate) => {
    dispath(registerStart());
    try {
        const res = await axios.post('api/users/register', user);
        console.log(res);
        dispath(registerSuccess);
        navigate('/loginform');
    } catch (error) {
        dispath(registerFailed());
        return error.response.data;
    }
};

export const logOut = async (dispath, id, navigate, accessToken, axiosJWT) => {
    dispath(logoutStart());
    try {
        await axiosJWT.post(
            'api/users/refreshtoken',
            { id },
            {
                headers: { token: `Bearer ${accessToken}` },
            },
        );
        dispath(logoutSuccess());
        navigate('/');
    } catch (error) {
        dispath(loginFailed());
    }
};
