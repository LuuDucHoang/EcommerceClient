import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//import component
import Button from '~/components/Button';
import { createAxios } from '~/utils/createInstamce';
import { loginSuccess } from '~/redux/authSlice';
import { getUserOrders, getCart } from '~/redux/apiRequest';
//import style,img
import style from './UserOrderNotConfirm.module.scss';
const cx = classNames.bind(style);
function UserOrder() {
    const dispath = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.login.currentUser);
    const id = user?.user._id;
    const accessToken = user?.accessToken;
    let axiosJWT = createAxios(user, dispath, loginSuccess);
    const [datas, setDatas] = useState([]);
    const [refresh, setRefresh] = useState('');

    useEffect(() => {
        const fethOrders = async () => {
            const orders = await getUserOrders(id, accessToken, axiosJWT);
            await getCart(dispath, id, navigate, accessToken, axiosJWT);

            if (orders?.data) {
                setDatas(orders.data);
            }
        };
        fethOrders();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('orderHeader')}>Đơn hàng của tôi</h2>
                <nav className={cx('supHeader')}>
                    <Link className={cx('orderSupNavItem', { active: 'active' })}>Tất cả đơn hàng</Link>
                    <Link className={cx('orderSupNavItem')}>Đơn hàng xác nhận</Link>
                    <Link className={cx('orderSupNavItem')}>Đơn hàng chưa xác nhận</Link>
                </nav>
                <div className={cx('allOrder')}>
                    {datas?.map((item, index) => {
                        return (
                            <div key={index} className={cx('orderItem')}>
                                <div className={cx('orderItemHeader')}>
                                    <FontAwesomeIcon
                                        className={cx('orderItemHeaderIcon')}
                                        icon={faTruck}
                                    ></FontAwesomeIcon>
                                    <h3 className={cx('orderItemHeaderTitle')}>Thông tin đơn hàng</h3>
                                    <span className={cx('status')}>
                                        Trạng thái: {item.adminConfirm ? 'Xác nhận' : 'Chờ xác nhận'}
                                    </span>
                                </div>
                                <div className={cx('orderItemBody')}>
                                    <ul className={cx('listItem')}>
                                        {item?.orders.map((order, indexOrder) => {
                                            return (
                                                <li key={indexOrder} className={cx('item')}>
                                                    <div className={cx('productDetail')}>
                                                        <div
                                                            className={cx('productImg')}
                                                            style={{
                                                                backgroundImage: `url('${order.img}')`,
                                                            }}
                                                        ></div>
                                                        <div className={cx('productInfo')}>
                                                            <p className={cx('productName')}>{order.name}</p>
                                                            <span className={cx('quantity')}>
                                                                Số lượng: {order.quality}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className={cx('price')}>
                                                        <span className={cx('productPrice')}>
                                                            {order.quality * order.price} $
                                                        </span>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <div className={cx('itemFooter')}>
                                        <div className={cx('finalPrice')}>
                                            <span className={cx('title')}>Tổng tiền:</span>
                                            <span className={cx('final')}>{item.finalPrice} $</span>
                                        </div>
                                        <div className={cx('buttonGroup')}>
                                            <Button onClick={() => setRefresh(Math.random())} ml5 bgRed textWhite>
                                                Hủy
                                            </Button>
                                            <Button to={`/order/user/${item._id}`} ml5 bgGreen textWhite>
                                                Xem chi tiết
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default UserOrder;
