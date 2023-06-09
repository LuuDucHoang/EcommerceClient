import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
//import component
import Button from '~/components/Button';
import ModalUpdateProduct from '../ModalUpdateProduct/ModalUpdateProduct';
import { createAxios } from '~/utils/createInstamce';
import { loginSuccess } from '~/redux/authSlice';
import { deleteProduct, removeDeletedProduct } from '~/redux/apiRequest';

//import style
import style from './AdminProductItem.module.scss';
import { useState } from 'react';
const cx = classNames.bind(style);
function AdminProductItem({ data, btnSuccess, restore, remove }) {
    const dispath = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login.currentUser);
    const accessToken = user?.accessToken;
    let axiosJWT = createAxios(user, dispath, loginSuccess);
    const [isOpen, setIsOpen] = useState(false);
    const [random, setRandom] = useState('');
    const handleDelete = async (id) => {
        if (remove) {
            await removeDeletedProduct(id, accessToken, axiosJWT);
            window.location.reload();
        }
        await deleteProduct(id, accessToken, axiosJWT);
        navigate('/admin/product/deleted/1');
    };
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
                        <Button onClick={() => handleDelete(data?._id)} textWhite bgRed>
                            Xóa
                        </Button>
                        <Button onClick={handleOpen} ml5 bgGreen textWhite>
                            {btnSuccess ? btnSuccess : 'Sửa'}
                        </Button>
                    </div>
                </div>
            </Link>
            <ModalUpdateProduct
                data={data}
                restore={restore}
                btnSuccess={btnSuccess}
                isOpen={isOpen}
                random={random}
            ></ModalUpdateProduct>
        </div>
    );
}

export default AdminProductItem;
