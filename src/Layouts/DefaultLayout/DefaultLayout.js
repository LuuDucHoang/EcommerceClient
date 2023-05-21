import classNames from 'classnames/bind';

import style from './DefaultLayout.module.scss';
import Header from '~/Layouts/Components/Header';
import Footer from '~/Layouts/Components/Footer';

const cx = classNames.bind(style);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('content')}>{children}</div>
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
