import classNames from 'classnames/bind';
//import component
import AdminNav from '~/components/AdminNav';
import AdminProductItem from '~/components/AdminProductItem/AdminProductItem';
//import style
import style from './ManageProduct.module.scss';
const cx = classNames.bind(style);
function ManageProduct() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <AdminNav></AdminNav>
                <div className={cx('content')}>
                    <div className={cx('contentHeader')}>
                        <h2 className={cx('headerTitle')}>Quản lí sản phẩm</h2>
                    </div>
                    <div className={cx('contentBody')}>
                        <AdminProductItem></AdminProductItem>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageProduct;
