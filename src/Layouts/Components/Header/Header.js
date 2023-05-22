import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
//import component
import Button from '~/components/Button';
// import img
import style from './Header.nmodule.scss';
import emailImg from '~/Stactic/images/email.png';
import logoImg from '~/Stactic/images/logo.png';
import castImg from '~/Stactic/images/shopping.png';

const cx = classNames.bind(style);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('upper')}>
                <div className={cx('contact')}>
                    <img src={emailImg} className={cx('emailIcon')} alt="Email"></img>
                    <span className={cx('email')}> BB@gmail.com</span>
                </div>
                <div className="logo">
                    <img src={logoImg} alt="LogoImage" className={cx('logoImg')}></img>
                </div>
                <div className={cx('castWrapper')}>
                    <div className={cx('cast')}>
                        <img src={castImg} alt="castImage" className={cx('castImage')}></img>
                    </div>
                    <div className={cx('singInBtn')}>
                        <Button to={'/loginform'} rounded>
                            Sign in
                        </Button>
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
