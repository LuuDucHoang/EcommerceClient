import classNames from 'classnames/bind';

import style from './Footer.module.scss';
const cx = classNames.bind(style);
function Footer() {
    return (
        <div>
            <div className={cx('footerWrapperUp')}>
                <div className={cx('up')}>
                    <div className={cx('footerItem')}>
                        <h3 className={cx('footerItemHeader')}>INFORMATION</h3>
                        <p className={cx('footerItemDes')}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't look
                            even slightly believable
                        </p>
                    </div>
                    <div className={cx('footerItem')}>
                        <h3 className={cx('footerItemHeader')}>MY ACCOUNT</h3>
                        <p className={cx('footerItemDes')}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't look
                            even slightly believable
                        </p>
                    </div>
                    <div className={cx('footerItem')}>
                        <h3 className={cx('footerItemHeader')}>ABOUT</h3>
                        <p className={cx('footerItemDes')}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't look
                            even slightly believable
                        </p>
                    </div>
                    <div className={cx('footerItem')}>
                        <h3 className={cx('footerItemHeader')}>CONTACTS</h3>
                        <p className={cx('footerItemDes')}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't look
                            even slightly believable
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('footerWrapperDown')}>
                <div className={cx('down')}>
                    <p className={cx('downDes')}>© 2019 All Rights Reserved. Design by BB Templates</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
