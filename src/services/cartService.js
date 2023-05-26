import * as httpRequest from '~/utils/httpRequest';

export const getCart = async (userId) => {
    try {
        const res = await httpRequest.get(`api/cart/${userId}`);
        return res;
    } catch (error) {
        console.log(error);
        return error.respone.data;
    }
};
