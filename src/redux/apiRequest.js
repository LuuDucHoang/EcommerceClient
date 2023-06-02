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
import { getCartFailed, getCartStart, getCartSuccess } from './cartSlice';

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
        return error.response;
    }
};

// cart
export const getCart = async (dispath, id, navigate, accessToken, axiosJWT) => {
    dispath(getCartStart());
    try {
        const res = await axiosJWT.get(`api/cart/getcart/${id}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispath(getCartSuccess(res.data));

        return res.data;
    } catch (error) {
        dispath(getCartFailed());
    }
};

export const insertCart = async (id, data, accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.post(
            `api/cart`,
            {
                userId: id,
                arr: data,
            },
            {
                headers: { token: `Bearer ${accessToken}` },
            },
        );

        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const removeItemCart = async (id, data, accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.put(
            'api/cart/remove',
            {
                userId: id,
                remove: data,
            },
            {
                headers: { token: `Bearer ${accessToken}` },
            },
        );
        return res.data;
    } catch (error) {
        return error.response;
    }
};

export const getUserIfor = async (id, accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.get(`api/user/${id}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        return res.data.data;
    } catch (error) {
        console.log(error);
        return error.response;
    }
};

export const updateUser = async (id, data, accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.put(
            'api/users/update',
            {
                id,
                data,
            },
            {
                headers: { token: `Bearer ${accessToken}` },
            },
        );
        return res.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};
export const clearUserCart = async (userId, accessToken, navigate, axiosJWT) => {
    try {
        const res = await axiosJWT.delete(`api/clearcart/${userId}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        navigate('/order/all');
        return res.data;
    } catch (error) {
        console.log(error);
        return error.response;
    }
};

// userOders
export const postUserOrder = async (userId, userName, address, phone, finalPrice, orders, accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.post(
            'api/userorder',
            {
                userId,
                userName,
                address,
                phone,
                finalPrice,
                orders,
            },
            {
                headers: { token: `Bearer ${accessToken}` },
            },
        );
        return res.data;
    } catch (error) {
        console.log(error);
        return error.response;
    }
};

export const getUserOrders = async (id, accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.get(`api/userorder/${id}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        return res.data;
    } catch (error) {
        console.log(error);
        return error.response;
    }
};

export const getDetailUserOrder = async (id, accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.get(`api/userorder/detail/${id}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        return res.data;
    } catch (error) {
        console.log(error);
        return error.response;
    }
};

export const cancelUserOrders = async (id, accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.patch(`api/userorder/cancel/${id}`, '', {
            headers: { token: `Bearer ${accessToken}` },
        });
        return res.data;
    } catch (error) {
        console.log(error);
        return error.response;
    }
};

export const getNotConfirmUserOrders = async (id, accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.get(`api/userorder/notconfirm/${id}`, {
            headers: { token: `Bearer ${accessToken}` },
        });

        return res.data;
    } catch (error) {
        console.log(error);
        return error.response;
    }
};

export const getConfirmUserOrders = async (id, accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.get(`api/userorder/confirm/${id}`, {
            headers: { token: `Bearer ${accessToken}` },
        });

        return res.data;
    } catch (error) {
        console.log(error);
        return error.response;
    }
};

export const getCancelUserOrders = async (id, accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.get(`api/userorder/cancel/${id}`, {
            headers: { token: `Bearer ${accessToken}` },
        });

        return res.data;
    } catch (error) {
        console.log(error);
        return error.response;
    }
};
