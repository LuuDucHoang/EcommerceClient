import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
//import component
import Button from '~/components/Button';
import ProductItem from '~/components/productItem';
import { getDetailService, getSimlarlService } from '~/services/productListService';
// import style,img
import style from './Detail.module.scss';
import productBGImage from '~/Stactic/images/product_bg.jpg';

const cx = classNames.bind(style);
function Detail() {
    const [detail, setDetail] = useState();
    const [smilar, setSmilar] = useState([]);
    const [size, setSize] = useState();
    const [number, setNumber] = useState(1);
    const { id, type } = useParams();
    const increase = () => {
        setNumber(number + 1);
    };
    const decrease = () => {
        setNumber(number - 1);
    };
    useEffect(() => {
        const fethApi = async () => {
            const data = await getDetailService(id);
            if (data) {
                setDetail(data.data);
            }
        };
        const fethSmilar = async () => {
            const smilars = await getSimlarlService(type);
            if (smilars) {
                setSmilar([...smilars.data]);
            }
        };
        fethSmilar();
        fethApi();
    }, [id, type]);
    return (
        <div className={cx('Wrapper')} style={{ backgroundImage: `url('${productBGImage}')` }}>
            <div className={cx('container')}>
                <div className={cx('detailWrapper')}>
                    <div className={cx('productImgWrapper')}>
                        <img className={cx('productImg')} alt={detail?.name} src={detail?.image}></img>
                    </div>
                    <div className={cx('colum')}></div>
                    <div className={cx('productDetail')}>
                        <h3 className={cx('productName')}>{detail?.name}</h3>
                        <h3 className={cx('productBand')}>Brand: {detail?.brand}</h3>
                        <h4 className={cx('productPrice')}>{detail?.price} $</h4>
                        <div>
                            <h4 className={cx('productSize')}>Your's size: {size}</h4>
                            <button onClick={() => setSize(detail?.size)} className={cx('productSizeChoise')}>
                                {detail?.size}
                            </button>
                        </div>
                        <h4 className={cx('productStatus')}>ProductStatus: {detail?.status}</h4>
                        <h4 className={cx('productType')}>Products Type: {detail?.type}</h4>
                        <h3 className={cx('quantityHeader')}>Quantity</h3>
                        <div className={cx('quantityInput')}>
                            {number === 1 ? (
                                <button className={cx('decreaseBtn', { disable: 'disale' })}>
                                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                </button>
                            ) : (
                                <button onClick={decrease} className={cx('decreaseBtn')}>
                                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                </button>
                            )}
                            <input value={number} onChange={() => {}} className={cx('increaseInput')}></input>
                            <button onClick={increase} className={cx('increaseBtn')}>
                                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                            </button>
                        </div>
                        <p className={cx('productDes')}>Description: {detail?.description}</p>
                        <Button sandybrownColor textWhite>
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
                </div>
                <div className={cx('smilarProductWrapper')}>
                    <h2 className={cx('smilarHeader')}>You may like :3</h2>
                    <div className={cx('smilarProduct')}>
                        {smilar.map((item, index) => (
                            <ProductItem data={item} key={index}></ProductItem>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
