import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
//import style,img
import style from './SupNavOrder.module.scss';
const cx = classNames.bind(style);
function SupNavOrder({ active1 = false, active2 = false, active3 = false, active4 = false }) {
    return (
        <div>
            <h2 className={cx('orderHeader')}>Đơn hàng của tôi</h2>
            <nav className={cx('supHeader')}>
                <Link to={'/order/all'} className={cx('orderSupNavItem', active1 && { active: 'active' })}>
                    Tất cả đơn hàng
                </Link>
                <Link to={'/order/notconfirm'} className={cx('orderSupNavItem', active2 && { active: 'active' })}>
                    Đơn hàng chưa xác nhận
                </Link>
                <Link to={'/order/confirm'} className={cx('orderSupNavItem', active3 && { active: 'active' })}>
                    Đơn hàng xác nhận
                </Link>
                <Link className={cx('orderSupNavItem', active4 && { active: 'active' })}>Đơn hàng đã hủy</Link>
            </nav>
        </div>
    );
}

export default SupNavOrder;
