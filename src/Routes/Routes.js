import Home from '~/Pages/Home';
import LoginForm from '~/components/LoginForm';
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
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
