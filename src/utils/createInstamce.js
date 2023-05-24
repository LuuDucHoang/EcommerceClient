import axios from 'axios';
import jwtDecode from 'jwt-decode';
const refreshToken = async () => {
    try {
        const res = await axios.post('api/users/refreshtoken', {
            withCredentials: true,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const createAxios = (user, dispath, stateSuccess) => {
    const newInstance = axios.create();
    newInstance.interceptors.request.use(
        async (config) => {
            let date = new Date();
            console.log(config.url);
            const decodedToken = jwtDecode(user?.accessToken);
            if (decodedToken.exp < date.getTime() / 1000) {
                const data = await refreshToken();
                const refeshUser = {
                    ...user,
                    accessToken: data.accessToken,
                };
                dispath(stateSuccess(refeshUser));
                config.headers['token'] = 'Bearer ' + data.accessToken;
            }
            return config;
        },
        (err) => {
            return Promise.reject(err);
        },
    );
    return newInstance;
};
