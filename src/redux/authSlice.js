import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            err: false,
        },
        register: {
            isFetching: false,
            success: false,
            err: false,
        },
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.err = false;
        },
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.err = true;
        },
        registerStart: (state) => {
            state.register.isFetching = true;
        },
        registerSuccess: (state) => {
            state.register.isFetching = false;
            state.register.success = true;
            state.login.err = false;
        },
        registerFailed: (state) => {
            state.register.isFetching = false;
            state.register.success = false;
            state.register.err = true;
        },
        logoutStart: (state) => {
            state.login.isFetching = true;
        },
        logoutSuccess: (state) => {
            state.login.isFetching = false;
            state.login.currentUser = null;
            state.login.err = false;
        },
        logoutFailed: (state) => {
            state.login.isFetching = false;
            state.login.err = true;
        },
    },
});
export const {
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed,
    logoutFailed,
    logoutStart,
    logoutSuccess,
} = authSlice.actions;
export default authSlice.reducer;
