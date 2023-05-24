import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
//import component
import Button from '~/components/Button';
import { createAxios } from '~/utils/createInstamce';
// import img
import style from './Header.nmodule.scss';
import emailImg from '~/Stactic/images/email.png';
import logoImg from '~/Stactic/images/logo.png';
import castImg from '~/Stactic/images/shopping.png';
import { useSelector } from 'react-redux';
import { loginSuccess, logoutSuccess } from '~/redux/authSlice';
import { logOut } from '~/redux/apiRequest';

const cx = classNames.bind(style);
function Header() {
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
                    <div className={cx('cast')}>
                        <img src={castImg} alt="castImage" className={cx('castImage')}></img>
                    </div>
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
                            <Link className={cx('navItem')} to="/">
                                Contact
                            </Link>
                        </div>
                    </nav>
                    <div className={cx('searchInputWrapper')}>
                        <input className={cx('searchInput')} placeholder="Search"></input>
                        <div className={cx('searchIcon')}>
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
