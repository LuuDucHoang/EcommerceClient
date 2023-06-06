import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import {
    faPlus,
    faShirt,
    faUser,
    faCheck,
    faXmark,
    faXmarkCircle,
    faUserSlash,
    faShopSlash,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import style from './AdminNav.module.scss';
const cx = classNames.bind(style);

function AdminNav() {
    return (
        <ul className={cx('adminNav')}>
            <li className={cx('napItem')}>
                <Link className={cx('navLink')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faPlus}></FontAwesomeIcon>
                    <span className={cx('title')}>Thêm sản phẩm mới</span>
                </Link>
                <Link className={cx('navLink')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faShirt}></FontAwesomeIcon>
                    <span className={cx('title')}>Quản lý sản phẩm</span>
                </Link>
                <Link className={cx('navLink')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faShopSlash}></FontAwesomeIcon>
                    <span className={cx('title')}>Quản lý bị xoá sản phẩm</span>
                </Link>
                <Link className={cx('navLink')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faUser}></FontAwesomeIcon>
                    <span className={cx('title')}>Quản lý người dùng</span>
                </Link>{' '}
                <Link className={cx('navLink')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faUserSlash}></FontAwesomeIcon>
                    <span className={cx('title')}>Quản lý người dùng bị xóa</span>
                </Link>
                <Link className={cx('navLink')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheck}></FontAwesomeIcon>
                    <span className={cx('title')}>Quản lý đơn được xác nhận</span>
                </Link>
                <Link className={cx('navLink')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faXmark}></FontAwesomeIcon>
                    <span className={cx('title')}>Quản lý đơn chưa được xác nhận</span>
                </Link>
                <Link className={cx('navLink')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faXmarkCircle}></FontAwesomeIcon>
                    <span className={cx('title')}>Quản lý đơn bị hủy</span>
                </Link>
            </li>
        </ul>
    );
}

export default AdminNav;
