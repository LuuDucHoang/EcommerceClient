import classNames from 'classnames/bind';

import style from './Header.nmodule.scss';
import { Link } from 'react-router-dom';
import emailImg from '~/Stactic/images/email.png';
import logoImg from '~/Stactic/images/logo.png';
import castImg from '~/Stactic/images/shopping.png';
import Button from '~/components/Button';
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
                    <div className={cx('orderNowBtn')}>
                        <Button rounded className={cx('orderBtn')}>
                            Sign in
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx('down')}>
                <nav className={cx('headerNav')}></nav>
            </div>
        </div>
    );
}

export default Header;
