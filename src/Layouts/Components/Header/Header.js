import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HeadlessTippy from '@tippyjs/react/headless';

//import component
import Button from '~/components/Button';
import { createAxios } from '~/utils/createInstamce';
import { logOut } from '~/redux/apiRequest';
import { logoutSuccess } from '~/redux/authSlice';
import Search from '~/components/Search/Search';
import { getCart, getUserIfor } from '~/redux/apiRequest';

// import img
import style from './Header.nmodule.scss';
import emailImg from '~/Stactic/images/email.png';
import logoImg from '~/Stactic/images/logo.png';
import castImg from '~/Stactic/images/shopping.png';
import Modal from '~/components/Modal/Modal';

const cx = classNames.bind(style);
function Header() {
    const navigate = useNavigate();
    const dispath = useDispatch();
    const [count, setCount] = useState(0);
    const [open, setOpen] = useState(false);
    const [random, setRandom] = useState('');
    const [name, setName] = useState('');
    const [x, setX] = useState('');
    const cart = useSelector((state) => state.cart.getCart.currentUserCart?.data);
    const user = useSelector((state) => state.auth.login.currentUser);
    const accessToken = user?.accessToken;
    const id = user?.user._id;
    let axiosJWT = createAxios(user, dispath, logoutSuccess);
    const handleCheck = () => {
        if (!user) {
            setOpen(true);
            setRandom(Math.random());
        }
    };
    const handleLogOut = async () => {
        await logOut(dispath, id, navigate, accessToken, axiosJWT);
    };
    useEffect(() => {
        const fethCart = async () => {
            if (user) {
                const data = await getCart(dispath, id, navigate, accessToken, axiosJWT);
                const info = await getUserIfor(id, accessToken, axiosJWT);
                if (info) {
                    setX(Math.random());
                    setName(info.name);
                }
                if (!data.data) {
                    setCount(0);
                    return;
                }
                setCount(data.data?.cart?.length);
            }
            if (!user) {
                setCount(0);
            }
        };
        fethCart();
    }, [cart?.cart.length, user]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('upper')}>
                <div className={cx('contact')}>
                    <img src={emailImg} className={cx('emailIcon')} alt="Email"></img>
                    <span className={cx('email')}> BB@gmail.com</span>
                </div>
                <div className="logo">
                    <Link to={'/'}>
                        <img src={logoImg} alt="LogoImage" className={cx('logoImg')}></img>
                    </Link>
                </div>
                <div className={cx('castWrapper')}>
                    <Link onClick={handleCheck} className={cx('cart')} to={user && '/cart'}>
                        <img src={castImg} alt="castImage" className={cx('castImage')}></img>
                        <span className={cx('cartCount')}>{count}</span>
                    </Link>

                    <div className={cx('singInBtn')}>
                        {user === null ? (
                            <div>
                                <Button to={'/loginform'} rounded>
                                    Sign in
                                </Button>
                                <Button ml5 to={'/registerform'} rounded>
                                    Sign up
                                </Button>
                            </div>
                        ) : (
                            <div style={{ display: 'flex' }}>
                                <div className={cx('userBtn')}>
                                    <HeadlessTippy
                                        visible
                                        interactive
                                        placement="bottom-start"
                                        render={() => (
                                            <ul className={cx('userInfo')}>
                                                <li className={cx('userItem')}>
                                                    <Link to={`/user/${id}`} className={cx('userItemText')}>
                                                        Thông tin cá nhân
                                                    </Link>
                                                </li>
                                                <li className={cx('userItem')}>
                                                    <Link className={cx('userItemText')}>Xem đơn hàng</Link>
                                                </li>
                                            </ul>
                                        )}
                                    >
                                        <div>{name && <Button>Hi, {name}</Button>}</div>
                                    </HeadlessTippy>
                                </div>

                                <Button onClick={handleLogOut} ml5>
                                    Log out
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={cx('down')}>
                <div className={cx('container')}>
                    <nav className={cx('headerNav')}>
                        <div>
                            <Link className={cx('navItem')} to="/">
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link className={cx('navItem')}>About</Link>
                        </div>
                        <div>
                            <Link className={cx('navItem')} to="/">
                                Products
                            </Link>
                        </div>
                        <div>
                            <Link className={cx('navItem')} to="/">
                                Fashion
                            </Link>
                        </div>
                        <div>
                            <Link className={cx('navItem')} to="/">
                                News
                            </Link>
                        </div>
                        <div>
                            <Link className={cx('navItem')}>Contact</Link>
                        </div>
                    </nav>
                    <Search></Search>
                </div>
            </div>
            <Modal isOpen={open} random={random}></Modal>
        </div>
    );
}

export default Header;
