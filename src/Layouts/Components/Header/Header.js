import classNames from 'classnames/bind';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import component
import Button from '~/components/Button';
import { createAxios } from '~/utils/createInstamce';
import { logOut } from '~/redux/apiRequest';
import { logoutSuccess } from '~/redux/authSlice';
import Search from '~/components/Search/Search';

// import img
import style from './Header.nmodule.scss';
import emailImg from '~/Stactic/images/email.png';
import logoImg from '~/Stactic/images/logo.png';
import castImg from '~/Stactic/images/shopping.png';

const cx = classNames.bind(style);
function Header() {
    const [count, setCount] = useState(0);
    const dispath = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login.currentUser);
    const accessToken = user?.accessToken;
    const id = user?.user._id;
    let axiosJWT = createAxios(user, dispath, logoutSuccess);
    const handleLogOut = async () => {
        const x = await logOut(dispath, id, navigate, accessToken, axiosJWT);
        console.log(x);
    };

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
                    <Link className={cx('cart')} to={'/cart'}>
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
                            <div>
                                <Button>Hi, {user?.user.name}</Button>
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
        </div>
    );
}

export default Header;
