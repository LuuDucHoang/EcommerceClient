import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './UserCart.module.scss';
import Button from '../Button/Button';
const cx = classNames.bind(style);
function UserCart() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('userWrapper')}>
                <div className={cx('blockHeader')}>
                    <h3 className={cx('headerTitle')}>Giao tới</h3>
                    <Link className={cx('changeLink')} to={'/'}>
                        Thay đổi
                    </Link>
                </div>
                <div className={cx('userInfor')}>
                    <p className={cx('name')}>Lưu Đức Hoàng</p>
                    <i className={cx('spreate')}></i>
                    <p className={cx('phoneNumber')}>0337041032</p>
                </div>
                <div className={cx('userAdr')}>
                    <span className={cx('home')}>Nhà</span>
                    <span className={cx('adr')}>Ki ốt xăng dầu số 4, Phường Bắc Sơn, Thị xã Phổ Yên, Thái Nguyên</span>
                </div>
            </div>
            <div className={cx('sumaryWrapper')}>
                <ul className={cx('priceItems')}>
                    <li className={cx('priceItem')}>
                        <div className={cx('priceText')}>Tạm tính</div>
                        <div className={cx('priceValue')}>0đ</div>
                    </li>
                    <li className={cx('priceItem')}>
                        <div className={cx('priceText')}>Giảm giá</div>
                        <div className={cx('priceValue')}>0đ</div>
                    </li>
                </ul>
                <div className={cx('priceTotal')}>
                    <span className={cx('priceText')}>Tổng tiền</span>
                    <div className={cx('priceContent')}>
                        <div className={cx('priceValueFinal')}>73.000 ₫</div>
                        <span className={cx('notice')}></span>
                    </div>
                </div>
            </div>
            <Button bgRed textWhite op05 mt15 w100>
                Mua hàng
            </Button>
        </div>
    );
}

export default UserCart;
