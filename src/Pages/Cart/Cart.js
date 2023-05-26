import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
//import component
import Button from '~/components/Button';
import ProductItem from '~/components/productItem';
import Quantity from '~/components/Quantity';
// import style,img
import style from './Cart.module.scss';
import productBGImage from '~/Stactic/images/product_bg.jpg';
import UserCart from '~/components/UserCart/UserCart';

const cx = classNames.bind(style);
function Cart() {
    const [number, setNumber] = useState(1);

    const increase = () => {
        setNumber(number + 1);
    };
    const decrease = () => {
        setNumber(number - 1);
    };
    return (
        <div className={cx('Wrapper')} style={{ backgroundImage: `url('${productBGImage}')` }}>
            <div className={cx('container')}>
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
                        <li className={cx('productItem')}>
                            <div className={cx('col1')}>
                                <Link to={'/'} className={cx('productImg')}>
                                    <img
                                        className={cx('prImg')}
                                        src="https://salt.tikicdn.com/cache/w78/ts/product/d3/2f/08/51ecae50eee41553349512015898d23d.jpg.webp"
                                        alt="asdd"
                                    ></img>
                                </Link>
                                <div className={cx('productContent')}>
                                    <Link className={cx('productName')} to={'/'}>
                                        Không Diệt Không Sinh Đừng Sợ Hãi (TB5)
                                    </Link>
                                    <span className={cx('productBrand')}>Biti's Hunter</span>
                                </div>
                            </div>
                            <div className={cx('col2')}>
                                <p className={cx('productPriceWrapper')}>
                                    <span className={cx('productPrice')}>82.500 ₫</span>
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
                                    <input value={number} onChange={() => {}} className={cx('increaseInput')}></input>
                                    <button onClick={increase} className={cx('increaseBtn')}>
                                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                    </button>
                                </div>
                            </div>
                            <div className={cx('col4')}>
                                <span className={cx('productFinalPrice')}>82.500 ₫</span>
                            </div>
                            <div className={cx('col5')}>
                                <button className={cx('removeIcon')}>
                                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                                </button>
                            </div>
                        </li>
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
