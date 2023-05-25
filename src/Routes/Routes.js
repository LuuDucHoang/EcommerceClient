import Home from '~/Pages/Home';
import LoginForm from '~/components/LoginForm';
import RegisterForm from '~/components/RegisterForm';
import Detail from '~/Pages/Detail';
import config from '~/config';

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
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
