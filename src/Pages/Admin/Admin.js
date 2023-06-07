import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//import component
import { postProduct } from '~/redux/apiRequest';
import { loginSuccess } from '~/redux/authSlice';
import { createAxios } from '~/utils/createInstamce';
import AdminNav from '~/components/AdminNav';
import Button from '~/components/Button/Button';
// import style
import style from './Admin.module.scss';
const cx = classNames.bind(style);
function Admin() {
    const dispath = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login.currentUser);
    const accessToken = user?.accessToken;
    let axiosJWT = createAxios(user, dispath, loginSuccess);

    const admin = user?.user.admin;
    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [price, setPrice] = useState('');
    const [priceErr, setPriceErr] = useState('');
    const [status, setStatus] = useState('Available');
    const [brand, setBrand] = useState('');
    const [size, setSize] = useState('');
    const [sizeErr, setSizeErr] = useState('');
    const [files, setFiles] = useState('');
    const [fileErr, setFileErr] = useState('');
    const [type, setType] = useState('shoes');
    const [description, setDescription] = useState('');
    const [isAdmin, setIsAdmin] = useState('');
    const handleFile = (e) => {
        if (!e.target.value.match(/\.(jpg|jpeg|png|gif)$/)) {
            setFileErr('File ảnh không hợp lệ');
            return false;
        }
        setFiles(e.target.files[0]);
    };
    const check = () => {
        let count = 0;
        if (!name) {
            setNameErr('vui lòng nhập tên sản phẩm');
            count++;
        }
        if (!price || isNaN(price)) {
            setPriceErr('Giá không hợp lệ');
            count++;
        }
        if (!files) {
            setFileErr('Vui lòng chọn file');
            count++;
        }
        if (!size || isNaN(size)) {
            setSizeErr('Size không hợp lệ');
            count++;
        }
        if (admin === false) {
            setIsAdmin('Bạn không phải admin');
            count++;
        }
        return count;
    };
    const hanlePost = async () => {
        setNameErr('');
        setSizeErr('');
        setFileErr('');
        setIsAdmin('');
        const count = check();
        if (count === 0) {
            const formData = new FormData();
            formData.append('image', files);
            formData.append('name', name);
            formData.append('price', price);
            formData.append('status', status);
            formData.append('brand', brand);
            formData.append('size', size);
            formData.append('type', type);
            formData.append('description', description);
            const a = await postProduct(formData, accessToken, axiosJWT);
            console.log(a);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <AdminNav></AdminNav>
                <div className={cx('content')}>
                    <div className={cx('contentHeader')}>
                        <h2 className={cx('headerTitle')}>Thêm sản phẩm mới</h2>
                    </div>
                    <div className={cx('contentBody')}>
                        <form className={cx('postProductForm')}>
                            <div className={cx('formControl')}>
                                <label htmlFor={'productName'} className={cx('inputLable')}>
                                    Tên sản phẩm
                                </label>
                                <div className={cx('input')}>
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        className={cx('inputValue')}
                                        placeholder="Nhập tên sản phẩm"
                                        name=" productName"
                                    ></input>
                                </div>
                                {nameErr && <span className={cx('err')}>{nameErr} </span>}
                            </div>
                            <div className={cx('formControl')}>
                                <label htmlFor={'productPrice'} className={cx('inputLable')}>
                                    Giá sản phẩm
                                </label>
                                <div className={cx('input')}>
                                    <input
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        type="text"
                                        className={cx('inputValue')}
                                        placeholder="Nhập giá của sản phẩm"
                                        name="productPrice"
                                    ></input>
                                </div>
                                {priceErr && <span className={cx('err')}>{priceErr} </span>}
                            </div>
                            <div className={cx('formControl')}>
                                <label htmlFor={'productStatus'} className={cx('inputLable')}>
                                    Trạng thái
                                </label>
                                <div className={cx('input')}>
                                    <select
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        required
                                        className={cx('select')}
                                    >
                                        <option value={'Available'} className={cx('selectOption')}>
                                            Available
                                        </option>
                                        <option value={'Not Available'} className={cx('selectOption')}>
                                            Not Available
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className={cx('formControl')}>
                                <label htmlFor={'productBrand'} className={cx('inputLable')}>
                                    Hãng Sản Xuất
                                </label>
                                <div className={cx('input')}>
                                    <input
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                        type="text"
                                        className={cx('inputValue')}
                                        placeholder="Nhập hãng sản xuất của sản phẩm"
                                        name="productBrand"
                                    ></input>
                                </div>
                            </div>
                            <div className={cx('formControl')}>
                                <label htmlFor={'productSize'} className={cx('inputLable')}>
                                    Nhập size
                                </label>
                                <div className={cx('input')}>
                                    <input
                                        type="text"
                                        value={size}
                                        onChange={(e) => setSize(e.target.value)}
                                        className={cx('inputValue')}
                                        placeholder="Nhập size của sản phẩm"
                                        name="productSize"
                                    ></input>
                                </div>
                                {sizeErr && <span className={cx('err')}>{sizeErr} </span>}
                            </div>
                            <div className={cx('formControl')}>
                                <label htmlFor={'productImg'} className={cx('inputLable')}>
                                    Ảnh sản phẩm
                                </label>
                                <div className={cx('input')}>
                                    <input
                                        onChange={(e) => {
                                            handleFile(e);
                                        }}
                                        type="file"
                                        className={cx('')}
                                        placeholder="Nhập size của sản phẩm"
                                        name="productImg"
                                    ></input>
                                </div>
                                {fileErr && <span className={cx('err')}>{fileErr} </span>}
                            </div>
                            <div className={cx('formControl')}>
                                <label htmlFor={'productStatus'} className={cx('inputLable')}>
                                    Loại sản phẩm
                                </label>
                                <div className={cx('input')}>
                                    <select
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        required
                                        className={cx('select')}
                                    >
                                        <option value={'shoes'} className={cx('selectOption')}>
                                            shoes
                                        </option>
                                        <option value={'clothes'} className={cx('selectOption')}>
                                            clothes
                                        </option>
                                        <option value={'other'} className={cx('selectOption')}>
                                            other
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className={cx('formControl')}>
                                <label htmlFor={'productBrand'} className={cx('inputLable')}>
                                    Mô tả sản phẩm
                                </label>
                                <div className={cx('input')}>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className={cx('textArea')}
                                        placeholder="Nhập mô tả sản phẩm"
                                    ></textarea>
                                </div>
                            </div>
                        </form>
                        {isAdmin && <span className={cx('err')}>{isAdmin} </span>}

                        <div className={cx('actionBtn')}>
                            <Button onClick={hanlePost} bgGreen textWhite>
                                Thêm mới
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
