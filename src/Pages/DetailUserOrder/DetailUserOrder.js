import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import component
import { createAxios } from '~/utils/createInstamce';
import Button from '~/components/Button';
import { loginSuccess } from '~/redux/authSlice';
import { getDetailUserOrder } from '~/redux/apiRequest';
// import style,img
import style from './DetailUserOrder.module.scss';
const cx = classNames.bind(style);
function DetailUserOrder() {
    const { _id } = useParams();
    const dispath = useDispatch();
    const user = useSelector((state) => state.auth.login.currentUser);
    const accessToken = user?.accessToken;
    let axiosJWT = createAxios(user, dispath, loginSuccess);
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        const fetchDetail = async () => {
            const data = await getDetailUserOrder(_id, accessToken, axiosJWT);
            if (data?.data) {
                setDatas(data.data);
            }
        };
        fetchDetail();
    }, [_id]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('detailHeader')}>
                    <h2 className={cx('headerTitle')}>Chi tiết đơn hàng #{datas?._id} - </h2>
                    <h2 className={cx('headerStatus')}> {datas?.adminConfirm ? ' Xác nhận' : 'Chờ xác nhận'}</h2>
                </div>
                <div className={cx('userGroup')}>
                    <div className={cx('DetailWrapper')}>
                        <span className={cx('title')}>ĐỊA CHỈ NGƯỜI NHẬN</span>
                        <div className={cx('content')}>
                            <h3 className={cx('name')}>{datas?.userName}</h3>
                            <p className={cx('address')}>{datas?.address}</p>
                            <p className={cx('phone')}>Điện thoại: {datas?.phone}</p>
                        </div>
                    </div>
                    <div className={cx('DetailWrapper')}>
                        <span className={cx('title')}>HÌNH THỨC THANH TOÁN</span>
                        <div className={cx('content')}>
                            <p className={cx('lable')}>Thanh toán tiền mặt khi nhận hàng</p>
                        </div>
                    </div>
                </div>
                <table className={cx('productWrapper')}>
                    <thead className={cx('tableHeader')}>
                        <tr className={cx('headerList')}>
                            <th className={cx('headerProduct')}>Sản phẩm</th>
                            <th className={cx('headerItem')}>Giá</th>
                            <th className={cx('headerItem')}>Số lượng</th>
                            <th className={cx('headerItem')}>Giảm giá</th>
                            <th className={cx('headerItem', { sum: 'sum' })}>Tạm tính</th>
                        </tr>
                    </thead>
                    <tbody className={cx('productList')}>
                        {datas?.orders?.map((order, index) => {
                            return (
                                <tr key={index} className={cx('productRow')}>
                                    <td className={cx('productDetail')}>
                                        <div className={cx('productItem')}>
                                            <img className={cx('productImg')} src={order.img} alt={order.name}></img>
                                            <div className={cx('productInfo')}>
                                                <span className={cx('productName')}>{order.name}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={cx('price', { item: 'item' })}>{order.price} $</td>
                                    <td className={cx('quantity', { item: 'item' })}>{order.quality}</td>
                                    <td className={cx('discount', { item: 'item' })}>0 ₫</td>
                                    <td className={cx('rawTotal', { item: 'item' })}>
                                        {order.quality * order.price} $
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot className={cx('footList')}>
                        <tr className={cx('footRow')}>
                            <td colSpan="4" className={cx('text')}>
                                <span className={cx('textValue')}>Tổng cộng</span>
                            </td>
                            <td className={cx('finalPrice')}>
                                <span className={cx('gFinalPrice')}>{datas.finalPrice} $</span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <Button to={'/order/all'} mt15 bgRed textWhite>
                    Back
                </Button>
            </div>
        </div>
    );
}

export default DetailUserOrder;
