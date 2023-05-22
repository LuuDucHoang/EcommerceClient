import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
//import component
import Button from '~/components/Button';

//import Style,image
import style from './ProductItem.module.scss';
import productImg from '~/Stactic/images/shoes1.png';

const cx = classNames.bind(style);
function ProductItem({ data, index }) {
    return (
        <div className={cx('wrapper')} key={index}>
            <Link style={{ display: 'block' }} to={'/'} className={cx('productItem')}>
                <div className={cx('bb')}>
                    <img className={cx('productImage')} alt=" productImage" src={data.image}></img>
                </div>
                <div className={cx('productDes')}>
                    <h3 className={cx('productName')}>{data.name}</h3>
                    <div className={cx('productDetail')}>
                        <p className={cx('productPrice')}>${data.price}</p>
                        <Button sandybrownColor textWhite>
                            Buy now
                        </Button>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductItem;
