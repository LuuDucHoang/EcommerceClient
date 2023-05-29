import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
//import component
import Button from '~/components/Button';
import ProductItem from '~/components/productItem';
import { getDetailService, getSimlarlService } from '~/services/productListService';
import { createAxios } from '~/utils/createInstamce';
import { useSelector } from 'react-redux';
import { insertCart } from '~/redux/apiRequest';
import { IsertCartSuccess } from '~/redux/cartSlice';
import { getCart } from '~/redux/apiRequest';
import Modal from '~/components/Modal/Modal';

// import style,img
import style from './Detail.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import productBGImage from '~/Stactic/images/product_bg.jpg';

const cx = classNames.bind(style);
function Detail() {
    const dispath = useDispatch();
    const user = useSelector((state) => state.auth.login.currentUser);
    const [detail, setDetail] = useState();
    const [smilar, setSmilar] = useState([]);
    const [size, setSize] = useState();
    const [open, setOpen] = useState(false);
    const [random, setRandom] = useState('');

    const navigate = useNavigate;
    const { id, type } = useParams();
    const [number, setNumber] = useState(1);
    let axiosJWT = createAxios(user, dispath, IsertCartSuccess);
    const notify = () => {
        toast.success('Đã thêm sản phẩm vào giỏ hàng', {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    };
    const increase = () => {
        setNumber(number + 1);
    };
    const decrease = () => {
        setNumber(number - 1);
    };
    const handlePutCartItem = async () => {
        if (!user) {
            setOpen(true);
            setRandom(Math.random());
            return;
        }
        const id = user.user?._id;
        const accessToken = user?.accessToken;
        const newData = {
            id: detail?._id,
            type: detail?.type,
            name: detail?.name,
            img: detail?.image,
            brand: detail?.brand,
            size: detail?.size,
            quality: number,
            price: detail?.price,
        };

        await insertCart(id, newData, accessToken, axiosJWT);
        await getCart(dispath, id, navigate, accessToken, axiosJWT);
        notify();
        setNumber(1);
    };
    useEffect(() => {
        const fethApi = async () => {
            const data = await getDetailService(id);
            if (data) {
                setDetail(data.data);
                setSize(data.data.size);
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
        <div>
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
                                <button onClick={(e) => setSize(detail?.size)} className={cx('productSizeChoise')}>
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
                            <Button onClick={handlePutCartItem} sandybrownColor textWhite>
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
                    <ToastContainer></ToastContainer>
                </div>
            </div>
            <Modal isOpen={open} random={random}></Modal>
        </div>
    );
}

export default Detail;
