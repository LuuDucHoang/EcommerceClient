import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
//import component
import Button from '~/components/Button';
import ModalUpdateProduct from '../ModalUpdateProduct/ModalUpdateProduct';
//import style
import style from './AdminProductItem.module.scss';
import { useState } from 'react';
const cx = classNames.bind(style);
function AdminProductItem({ data }) {
    const [isOpen, setIsOpen] = useState(false);
    const [random, setRandom] = useState('');
    const handleOpen = () => {
        setRandom(Math.random());
        setIsOpen(true);
    };
    return (
        <div className={cx('wrapperItem')}>
            <Link className={cx('productItem')}>
                <div className={cx('smallWrapper')}>
                    <div className={cx('bb')}>
                        <img className={cx('productImage')} alt="productImage" src={data?.image}></img>
                    </div>
                    <div className={cx('productInfo')}>
                        <h3 className={cx('productName')}>{data?.name}</h3>
                        <span className={cx('productPrice')}>{data?.price} $</span>
                        <span className={cx('productPrice')}>{data?.brand}</span>
                    </div>
                </div>
                <div className={cx('productDes')}>
                    <div className={cx('productDetail')}>
                        <Button textWhite bgRed>
                            Xóa
                        </Button>
                        <Button onClick={handleOpen} ml5 bgGreen textWhite>
                            Sửa
                        </Button>
                    </div>
                </div>
            </Link>
            <ModalUpdateProduct data={data} isOpen={isOpen} random={random}></ModalUpdateProduct>
        </div>
    );
}

export default AdminProductItem;
