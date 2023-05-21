import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
//import component
import Button from '~/components/Button';

//import Style,image
import style from './ProductItem.module.scss';
import productImg from '~/Stactic/images/shoes1.png';

const cx = classNames.bind(style);
function ProductItem() {
    return (
        <Link style={{ display: 'block' }} to={'/'} className={cx('productItem')}>
            <div className={cx('bb')}>
                <img className={cx('productImage')} alt=" productImage" src={productImg}></img>
            </div>
            <div className={cx('productDes')}>
                <h3 className={cx('productName')}>Short Openwork Cardigan</h3>
                <div className={cx('productDetail')}>
                    <p className={cx('productPrice')}>$120.00</p>
                    <Button sandybrownColor textWhite>
                        Buy now
                    </Button>
                </div>
            </div>
        </Link>
    );
}

export default ProductItem;
