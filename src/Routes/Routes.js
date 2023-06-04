import config from '~/config';
import Home from '~/Pages/Home';
import LoginForm from '~/components/LoginForm';
import RegisterForm from '~/components/RegisterForm';
import Detail from '~/Pages/Detail';
import Cart from '~/Pages/Cart';
import UpdateInfo from '~/Pages/UpdateInfo';
import DetailUserOrder from '~/Pages/DetailUserOrder';
import UserOrderAll from '~/Pages/UserOrderAll/UserOrderAll';
import UserOrderNotConfirm from '~/Pages/UserOrderNotConfirm/UserOrderNotConfirm';
import UserOrderComfirm from '~/Pages/UserOrderComfirm';
import UserOrderCancel from '~/Pages/UserOrderCancel';
import Admin from '~/Pages/Admin';
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
        component: UserOrderAll,
    },
    {
        path: config.routes.oderDetail,
        component: DetailUserOrder,
    },
    {
        path: config.routes.notConfirmOrder,
        component: UserOrderNotConfirm,
    },
    {
        path: config.routes.confirmOrder,
        component: UserOrderComfirm,
    },
    {
        path: config.routes.cancelOrder,
        component: UserOrderCancel,
    },
    {
        path: config.routes.adminPage,
        component: Admin,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
