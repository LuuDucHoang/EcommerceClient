import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
//import component
import AdminNav from '~/components/AdminNav';
import AdminProductItem from '~/components/AdminProductItem/AdminProductItem';
import { getAll } from '~/redux/apiRequest';
import Pagination from '~/components/Pagination/Pagination';
//import style
import style from './ManageProduct.module.scss';
import { useEffect, useState } from 'react';
const cx = classNames.bind(style);
function ManageProduct() {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState('');
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const { pages } = useParams();
    let pageSize = 10;
    useEffect(() => {
        const fetchProudct = async () => {
            const data = await getAll(+pages, pageSize);
            if (data) {
                setProducts(data.data);
                setTotal(data.total);
            }
        };
        fetchProudct();
    }, [pages]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <AdminNav></AdminNav>
                <div className={cx('content')}>
                    <div className={cx('contentHeader')}>
                        <h2 className={cx('headerTitle')}>Quản lí sản phẩm</h2>
                    </div>
                    <div className={cx('contentBody')}>
                        {products?.map((product, index) => {
                            return (
                                <div key={index} style={{ width: '100%' }}>
                                    <AdminProductItem data={product} index={index}></AdminProductItem>
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
                                    navigate(`/admin/product/${page}`);
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

export default ManageProduct;
