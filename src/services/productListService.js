import * as httpRequest from '~/utils/httpRequest';

export const productList = async () => {
    try {
        const res = await httpRequest.get(`api/product`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const postProductList = async (data, options) => {
    try {
        const res = await httpRequest.post('api/product/post', data, options);
        return res;
    } catch (error) {
        console.log(error);
    }
};
