import Home from '~/Pages/Home';
import LoginForm from '~/components/LoginForm';
import RegisterForm from '~/components/RegisterForm';
import Detail from '~/Pages/Detail';
import config from '~/config';
import Cart from '~/Pages/Cart';
import UpdateInfo from '~/Pages/UpdateInfo';
import UserOrderNotConfirm from '~/Pages/UserOrderNotConfirm';
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.form,
        component: LoginForm,
    },
    {
        path: config.routes.register,
        component: RegisterForm,
    },
    {
        path: config.routes.detail,
        component: Detail,
    },
    {
        path: config.routes.cart,
        component: Cart,
    },
    {
        path: config.routes.updateInfo,
        component: UpdateInfo,
    },
    {
        path: config.routes.checkOrder,
        component: UserOrderNotConfirm,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
