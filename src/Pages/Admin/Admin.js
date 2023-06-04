import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
//import component
import { Link } from 'react-router-dom';
// import style
import style from './Admin.module.scss';
const cx = classNames.bind(style);
function Admin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <ul className={cx('adminNav')}>
                    <li className={cx('napItem')}>
                        <Link className={cx('navLink')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faPlus}></FontAwesomeIcon>
                            <span className={cx('title')}>Thêm sản phẩm mới</span>
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
                <div className={cx('content')}>
                    <div className={cx('contentHeader')}>
                        <h2 className={cx('headerTitle')}>Thêm sản phẩm mới</h2>
                    </div>
                    <div className={cx('contentBody')}>
                        <form className={cx('postProductForm')}>
                            <div className={cx('formControl')}>
                                <label for={'productName'} className={cx('inputLable')}>
                                    Tên sản phẩm
                                </label>
                                <div className={cx('input')}>
                                    <input
                                        type="text"
                                        className={cx('inputValue')}
                                        placeholder="Nhập tên sản phẩm"
                                        name=" productName"
                                    ></input>
                                </div>
                            </div>
                            <div className={cx('formControl')}>
                                <label for={'productPrice'} className={cx('inputLable')}>
                                    Giá sản phẩm
                                </label>
                                <div className={cx('input')}>
                                    <input
                                        type="text"
                                        className={cx('inputValue')}
                                        placeholder="Nhập giá của sản phẩm"
                                        name="productPrice"
                                    ></input>
                                </div>
                            </div>
                            <div className={cx('formControl')}>
                                <label for={'productStatus'} className={cx('inputLable')}>
                                    Trạng thái
                                </label>
                                <div className={cx('input')}>
                                    <input
                                        type="text"
                                        className={cx('inputValue')}
                                        placeholder="Nhập trạng thái ava"
                                        name="productStatus"
                                    ></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
