import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
//import component
import Banner from '~/components/Banner';
import SixBox from '~/components/Box';
import ProductItem from '~/components/productItem';
import News from '~/components/News';
import { productList } from '~/services/productListService';
import Button from '~/components/Button/Button';

//import Img, style
import style from './Home.module.scss';
import fashionImg from '~/Stactic/images/fashion.jpg';
import productBGImage from '~/Stactic/images/product_bg.jpg';
const cx = classNames.bind(style);
function Home() {
    const [products, setProducts] = useState();
    useEffect(() => {
        const fethApi = async () => {
            const data = await productList();
            if (data) {
                setProducts(data.message.data);
            }
        };
        fethApi();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Banner></Banner>
            <SixBox></SixBox>
            <div className={cx('Wrapper')} style={{ backgroundImage: `url('${productBGImage}')` }}>
                <div className={cx('container')}>
                    <div className={cx('Header')}>
                        <h2 className={cx('title')}>Our Products</h2>
                    </div>
                    <div className={cx('Main')}>
                        {products &&
                            products.map((product, index) => {
                                return <ProductItem key={index} data={product}></ProductItem>;
                            })}
                    </div>
                    <div className={cx('moreBtn')}>
                        <Button sandybrownColor textWhite>
                            Show More
                        </Button>
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
