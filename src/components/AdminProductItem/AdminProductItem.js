import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
//import component
import Button from '~/components/Button';
//import style
import style from './AdminProductItem.module.scss';
const cx = classNames.bind(style);
function AdminProductItem({ data }) {
    return (
        <div className={cx('wrapperItem')}>
            <Link className={cx('productItem')}>
                <div className={cx('bb')}>
                    <img
                        className={cx('productImage')}
                        alt="productImage"
                        src={
                            'https://salt.tikicdn.com/cache/750x750/ts/product/e4/a3/52/4845a31ebb7c0b75766ef9272506f236.jpg.webp'
                        }
                    ></img>
                </div>
                <div className={cx('productDes')}>
                    <h3 className={cx('productName')}>Tâm Lý Học - Phác Họa Chân Dung Kẻ Phạm Tội</h3>
                    <div className={cx('productDetail')}>
                        <Button textWhite bgRed>
                            Xóa
                        </Button>
                        <Button bgGreen textWhite>
                            Sửa
                        </Button>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default AdminProductItem;
