const routes = {
    home: '/',
    form: '/loginform',
    register: '/registerform',
    detail: '/:id/:type',
    cart: '/cart',
    updateInfo: '/user/:id',
    checkOrder: '/order/all',
    oderDetail: '/order/user/:_id',
    notConfirmOrder: '/order/notconfirm',
    confirmOrder: '/order/confirm',
    cancelOrder: '/order/cancel',
    adminPage: '/admin',
    manageProduct: '/admin/product/:pages',
    manageDeletedProduct: '/admin/product/deleted/:pages',
};
export default routes;
