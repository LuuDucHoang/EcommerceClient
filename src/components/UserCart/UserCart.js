import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import style from './UserCart.module.scss';
import Button from '../Button/Button';
const cx = classNames.bind(style);
function UserCart({ qualitys, arrs }) {
    const user = useSelector((state) => state.auth.login.currentUser?.user);
    const [finalPrice, setFinalPrice] = useState();

    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < arrs.length; i++) {
            let x = +qualitys[i] * +arrs[i];
            // eslint-disable-next-line use-isnan
            if (x === NaN) {
                x = 0;
            }
            sum = sum + x;
        }
        setFinalPrice(sum);
    }, [qualitys, arrs]);
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
                    <p className={cx('name')}>{user?.name || ''}</p>
                    <i className={cx('spreate')}></i>
                    <p className={cx('phoneNumber')}>ĐT: {user?.phone || ''}</p>
                </div>
                <div className={cx('userAdr')}>
                    <span className={cx('home')}>Nhà</span>
                    <span className={cx('adr')}>{user?.address || ''}</span>
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
                        <div className={cx('priceValueFinal')}>{finalPrice || 0} ₫</div>
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
