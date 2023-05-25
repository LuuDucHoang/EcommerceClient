import * as httpRequest from '~/utils/httpRequest';

export const productList = async () => {
    try {
        const res = await httpRequest.get(`api/product`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const searchServices = async (name, limit = 5) => {
    try {
        const res = await httpRequest.get('api/product', {
            params: {
                name,
                limit,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
        return error.respone.data;
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
