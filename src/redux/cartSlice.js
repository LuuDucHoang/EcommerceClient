import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        getCart: {
            currentUserCart: null,
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
    },
});
export const { getCartStart, getCartSuccess, getCartFailed } = cartSlice.actions;
export default cartSlice.reducer;
