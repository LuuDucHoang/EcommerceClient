import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
//import component
import { getCart } from '~/redux/apiRequest';
import { createAxios } from '~/utils/createInstamce';
import { loginSuccess } from '~/redux/authSlice';
// import style,img
import style from './Cart.module.scss';
import productBGImage from '~/Stactic/images/product_bg.jpg';
import UserCart from '~/components/UserCart/UserCart';

const cx = classNames.bind(style);
function Cart() {
    const dispath = useDispatch();
    const navigate = useNavigate();
    const [number, setNumber] = useState(1);
    const [datas, setDatas] = useState([]);
    let arr = [];
    const user = useSelector((state) => state.auth.login.currentUser);
    let axiosJWT = createAxios(user, dispath, loginSuccess);
    const accessToken = user?.accessToken;
    const id = user?.user._id;
    const increase = () => {
        setNumber(number + 1);
    };
    const decrease = () => {
        setNumber(number - 1);
    };
    useEffect(() => {
        const fethCart = async () => {
            const x = await getCart(dispath, id, navigate, accessToken, axiosJWT);
            setDatas(x.data.cart);
        };
        fethCart();
    }, [datas.length]);
    return (
        <div className={cx('Wrapper')} style={{ backgroundImage: `url('${productBGImage}')` }}>
            <div className={cx('container')}>
                {datas.ca}
                <div className={cx('cartWrapper')}>
                    <h1 className={cx('cartName')}>Giỏ hàng</h1>
                    <div className={cx('table')}>
                        <label className={cx('allCount')}>
                            <span className={cx('lable')}>Tất cả (1 sản phẩm)</span>
                        </label>
                        <span>Đơn giá</span>
                        <span>Số lượng</span>
                        <span>Thành tiền</span>
                    </div>
                    <ul className={cx('productList')}>
                        {datas?.map((data, index) => {
                            return (
                                <li key={index} className={cx('productItem')}>
                                    <div className={cx('col1')}>
                                        <Link to={'/'} className={cx('productImg')}>
                                            <img className={cx('prImg')} src={data.img} alt={data.name}></img>
                                        </Link>
                                        <div className={cx('productContent')}>
                                            <Link className={cx('productName')} to={'/'}>
                                                {data.name}
                                            </Link>
                                            <span className={cx('productBrand')}>{data?.brand}</span>
                                            <div>
                                                <span className={cx('productBrand')}>Size: {data.size}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('col2')}>
                                        <p className={cx('productPriceWrapper')}>
                                            <span className={cx('productPrice')}>{data.price} $</span>
                                        </p>
                                    </div>
                                    <div className={cx('col3')}>
                                        <div className={cx('quantityInput')}>
                                            {number === 1 ? (
                                                <button className={cx('decreaseBtn', { disable: 'disale' })}>
                                                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                                </button>
                                            ) : (
                                                <button onClick={decrease} className={cx('decreaseBtn')}>
                                                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                                </button>
                                            )}
                                            <input
                                                value={number}
                                                onChange={() => {}}
                                                className={cx('increaseInput')}
                                            ></input>
                                            <button onClick={increase} className={cx('increaseBtn')}>
                                                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={cx('col4')}>
                                        <span className={cx('productFinalPrice')}>{data.quality * data.price} $</span>
                                    </div>
                                    <div className={cx('col5')}>
                                        <button className={cx('removeIcon')}>
                                            <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={cx('rightCol')}>
                    <UserCart></UserCart>
                </div>
            </div>
        </div>
    );
}

export default Cart;
