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
import { removeItemCart } from '~/redux/apiRequest';
// import style,img
import style from './Cart.module.scss';
import productBGImage from '~/Stactic/images/product_bg.jpg';
import UserCart from '~/components/UserCart/UserCart';

const cx = classNames.bind(style);
function Cart() {
    const dispath = useDispatch();
    const navigate = useNavigate();
    const [number, setNumber] = useState([]);
    const [datas, setDatas] = useState([]);
    const [priceArr, setPriceArr] = useState([]);
    const user = useSelector((state) => state.auth.login.currentUser);
    let axiosJWT = createAxios(user, dispath, loginSuccess);
    const accessToken = user?.accessToken;
    const id = user?.user._id;

    const increase = (index) => {
        const x = number;
        x[index] = (+number[index] + 1).toString();
        return setNumber(() => [...x]);
    };
    const decrease = (index) => {
        const x = number;
        if (+number[index] - 1 <= 0) {
            x.splice(index, 1, '0');
            setNumber((prev) => [...prev, x]);
            return;
        }
        x.splice(index, 1, (+number[index] - 1).toString());

        return setNumber(() => [...x]);
    };
    const handleRemove = async (data) => {
        const x = await removeItemCart(id, data, accessToken, axiosJWT);
        setDatas(x?.data.cart);
    };
    useEffect(() => {
        const fethCart = async () => {
            const x = await getCart(dispath, id, navigate, accessToken, axiosJWT);
            if (x?.data) {
                setDatas(x.data.cart);
            }
        };
        if (datas) {
            setPriceArr([]);
            setNumber([]);
            for (let i = 0; i < datas?.length; i++) {
                setPriceArr((prev) => [...prev, datas[i]?.price]);
                setNumber((prev) => [...prev, datas[i]?.quality]);
            }
        }
        fethCart();
    }, [datas.length]);

    return (
        <div className={cx('Wrapper')} style={{ backgroundImage: `url('${productBGImage}')` }}>
            <div className={cx('container')}>
                <div className={cx('cartWrapper')}>
                    <h1 className={cx('cartName')}>Giỏ hàng</h1>
                    <div className={cx('table')}>
                        <label className={cx('allCount')}>
                            <span className={cx('lable')}>Tất cả ({datas.length} sản phẩm)</span>
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
                                        <Link to={`/${data.id}/${data.type}`} className={cx('productImg')}>
                                            <img className={cx('prImg')} src={data?.img} alt={data?.name}></img>
                                        </Link>
                                        <div className={cx('productContent')}>
                                            <Link className={cx('productName')} to={`/${data.id}/${data.type}`}>
                                                {data?.name}
                                            </Link>
                                            <span className={cx('productBrand')}>{data?.brand}</span>
                                            <div>
                                                <span className={cx('productBrand')}>Size: {data?.size}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('col2')}>
                                        <p className={cx('productPriceWrapper')}>
                                            <span className={cx('productPrice')}>{data?.price} $</span>
                                        </p>
                                    </div>
                                    <div className={cx('col3')}>
                                        <div className={cx('quantityInput')}>
                                            {+number[index] === 1 ? (
                                                <button className={cx('decreaseBtn', { disable: 'disale' })}>
                                                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => {
                                                        decrease(index);
                                                    }}
                                                    className={cx('decreaseBtn')}
                                                >
                                                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                                </button>
                                            )}
                                            <input
                                                value={+number[index] || 0}
                                                onChange={(e) => {}}
                                                className={cx('increaseInput')}
                                            ></input>
                                            <button
                                                onClick={() => {
                                                    increase(index);
                                                }}
                                                className={cx('increaseBtn')}
                                            >
                                                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={cx('col4')}>
                                        <span className={cx('productFinalPrice')}>
                                            {+number[index] && +number[index] * data.price} $
                                        </span>
                                    </div>
                                    <div className={cx('col5')}>
                                        <button onClick={() => handleRemove(data, index)} className={cx('removeIcon')}>
                                            <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={cx('rightCol')}>
                    <UserCart qualitys={number} arrs={priceArr}></UserCart>
                </div>
            </div>
        </div>
    );
}

export default Cart;
