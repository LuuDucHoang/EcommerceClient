import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        getCart: {
            currentUserCart: null,
            isFetching: false,
            err: false,
        },
        insertCart: {
            postCart: false,
            isFetching: false,
            err: false,
        },
    },
    reducers: {
        getCartStart: (state) => {
            state.getCart.isFetching = true;
        },
        getCartSuccess: (state, action) => {
            state.getCart.isFetching = false;
            state.getCart.currentUserCart = action.payload;
        },
        getCartFailed: (state) => {
            state.getCart.isFetching = false;
            state.getCart.err = true;
        },
        IsertCartStart: (state) => {
            state.insertCart.isFetching = true;
        },
        IsertCartSuccess: (state) => {
            state.insertCart.isFetching = false;
            state.insertCart.postCart = true;
        },
        IsertCartFailed: (state) => {
            state.insertCart.isFetching = false;
            state.insertCart.postCart = false;
            state.insertCart.err = true;
        },
    },
});
export const { getCartStart, getCartSuccess, getCartFailed, IsertCartStart, IsertCartSuccess, IsertCartFailed } =
    cartSlice.actions;
export default cartSlice.reducer;
