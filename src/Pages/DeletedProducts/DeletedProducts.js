import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
//import component
import AdminNav from '~/components/AdminNav';
import AdminProductItem from '~/components/AdminProductItem/AdminProductItem';
import Pagination from '~/components/Pagination/Pagination';
import { getDeletedProduct } from '~/redux/apiRequest';
import { loginSuccess } from '~/redux/authSlice';
import { createAxios } from '~/utils/createInstamce';
//import style
import style from './DeletedProducts.module.scss';
const cx = classNames.bind(style);
function DeletedProducts() {
    const dispath = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login.currentUser);
    const accessToken = user?.accessToken;
    let axiosJWT = createAxios(user, dispath, loginSuccess);
    const { pages } = useParams();
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState('');
    let pageSize = 10;
    useEffect(() => {
        const fetchDeletedProudct = async () => {
            const data = await getDeletedProduct(page, pageSize, accessToken, axiosJWT);
            if (data?.data) {
                setProducts(data.data);
                setTotal(data.total);
            }
        };
        fetchDeletedProudct();
    }, [pages]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <AdminNav></AdminNav>
                <div className={cx('content')}>
                    <div className={cx('contentHeader')}>
                        <h2 className={cx('headerTitle')}>Quản lí sản phẩm đã bị xóa</h2>
                    </div>
                    <div className={cx('contentBody')}>
                        {products?.map((product, index) => {
                            return (
                                <div key={index} style={{ width: '100%' }}>
                                    <AdminProductItem
                                        data={product}
                                        index={index}
                                        remove={true}
                                        restore={true}
                                        btnSuccess={'Cập nhật và khôi phục'}
                                    ></AdminProductItem>
                                </div>
                            );
                        })}
                    </div>
                    {products && (
                        <div className={cx('Pagination')}>
                            <Pagination
                                className="pagination-bar"
                                currentPage={+pages}
                                totalCount={total}
                                pageSize={pageSize}
                                onPageChange={(page) => {
                                    setPage(page);
                                    navigate(`/admin/product/deleted/${pages}`);
                                    window.scroll({
                                        top: '0',
                                        behavior: 'smooth',
                                    });
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DeletedProducts;
