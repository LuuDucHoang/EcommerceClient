import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
//import component
import Button from '~/components/Button';

//import Style,image
import style from './ProductItem.module.scss';

const cx = classNames.bind(style);
function ProductItem({ data, m0, index, df, w100, h117, w117, bg, w50 }) {
    return (
        <div
            onClick={() => {
                window.scroll({
                    top: '0',
                    behavior: 'smooth',
                });
            }}
            className={cx('wrapper', { w100, bg, m0 })}
            key={index}
        >
            <Link style={{ display: 'block' }} to={`/${data._id}/${data.type}`} className={cx('productItem', { df })}>
                <div className={cx('bb', { w117, h117 })}>
                    <img className={cx('productImage')} alt=" productImage" src={data.image}></img>
                </div>
                <div className={cx('productDes', { w50 })}>
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
