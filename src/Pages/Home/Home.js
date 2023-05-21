import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

//import component
import Banner from '~/Layouts/Components/Banner/Banner';
import SixBox from '~/Layouts/Components/Box/sixBox';
import ProductItem from '~/components/productItem';
import News from '~/components/News';
//import Img, style
import style from './Home.module.scss';
import fashionImg from '~/Stactic/images/fashion.jpg';
import productBGImage from '~/Stactic/images/product_bg.jpg';
const cx = classNames.bind(style);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Banner></Banner>
            <SixBox></SixBox>
            <div className={cx('Wrapper')} style={{ backgroundImage: `url('${productBGImage}')` }}>
                <div className={cx('container')}>
                    <div className={cx('Header')}>
                        <h2 className={cx('title')}>Our Products</h2>
                    </div>
                    <div className={cx('productMain')}>
                        <ProductItem></ProductItem>
                    </div>
                </div>
            </div>
            <Link to={'/'}>
                <div className={cx('Banner2')} style={{ backgroundImage: `url(${fashionImg})` }}></div>
            </Link>
            <div className={cx('Wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('Header')}>
                        <h2 className={cx('title')}>Lastest News</h2>
                    </div>
                    <div className={cx('Main')}>
                        <News></News>
                        <News></News>
                        <News></News>
                        <News></News>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
