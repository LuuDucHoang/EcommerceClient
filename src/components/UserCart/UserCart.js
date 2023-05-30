import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//import componet
import { getUserIfor } from '~/redux/apiRequest';
import { createAxios } from '~/utils/createInstamce';
import { loginSuccess } from '~/redux/authSlice';

import Button from '../Button/Button';
import Modal from '../Modal/Modal';
//import style,img
import style from './UserCart.module.scss';

const cx = classNames.bind(style);
function UserCart({ qualitys, arrs }) {
    const dispath = useDispatch();
    const user = useSelector((state) => state.auth.login.currentUser);
    const [finalPrice, setFinalPrice] = useState();
    const [info, setInfo] = useState({});
    const [open, setOpen] = useState(false);
    const [refresh, setRefresh] = useState('');
    const accessToken = user?.accessToken;
    let axiosJWT = createAxios(user, dispath, loginSuccess);
    const id = user?.user?._id;

    const title = 'Bạn chưa cung cấp đầy đủ thông tin';
    const des = 'Bạn có muốn tới trang cập nhật thêm thông tin?';
    const successBtn = 'Cập nhật';
    const submitBtn = () => {
        if (!info?.phone || !info?.address) {
            setOpen(true);
            setRefresh(Math.random());
        }
    };
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
        const fethUser = async () => {
            const info = await getUserIfor(id, accessToken, axiosJWT);
            if (info) {
                setInfo(info);
            }
        };
        fethUser();
        setFinalPrice(sum);
    }, [qualitys, arrs]);
    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('userWrapper')}>
                    <div className={cx('blockHeader')}>
                        <h3 className={cx('headerTitle')}>Giao tới</h3>
                        <Link className={cx('changeLink')} to={`/user/${id}`}>
                            Thay đổi
                        </Link>
                    </div>
                    <div className={cx('userInfor')}>
                        <p className={cx('name')}>{info?.name || ''}</p>
                        <i className={cx('spreate')}></i>
                        <p className={cx('phoneNumber')}>ĐT: {info?.phone || ''}</p>
                    </div>
                    <div className={cx('userAdr')}>
                        <span className={cx('home')}>Nhà</span>
                        <span className={cx('adr')}>{info?.address || ''}</span>
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
                <Button onClick={submitBtn} bgRed textWhite op05 mt15 w100>
                    Mua hàng
                </Button>
            </div>
            <Modal isOpen={open} random={refresh} title={title} des={des} successBtn={successBtn}></Modal>
        </div>
    );
}

export default UserCart;
