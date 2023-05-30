import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

//import component
import Button from '~/components/Button';
import { createAxios } from '~/utils/createInstamce';
import { getUserIfor } from '~/redux/apiRequest';
import { loginSuccess } from '~/redux/authSlice';
import { updateUser } from '~/redux/apiRequest';
//import style,img
import style from './UpdateInfo.module.scss';
import productBGImage from '~/Stactic/images/product_bg.jpg';

const cx = classNames.bind(style);
function UpdateInfo() {
    const dispath = useDispatch();

    const { id } = useParams();
    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [address, setAddress] = useState('');
    const [errAddress, setErrAddress] = useState('');
    const [sex, setSex] = useState('Nam');
    const [age, setAge] = useState('');
    const [errAge, setErrAge] = useState('');
    const [phone, setPhone] = useState('');
    const [errphone, setErrPhone] = useState('');
    const user = useSelector((state) => state.auth.login.currentUser);
    let axiosJWT = createAxios(user, dispath, loginSuccess);
    const accessToken = user?.accessToken;
    const notify = () => {
        toast.success('Cập nhật thành công', {
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
    const check = () => {
        let count = 0;
        setNameErr('');
        setErrAddress('');
        setErrAge('');
        setErrPhone('');
        if (!name || name.length > 30) {
            count++;
            setNameErr('Tên không được để trống và không quá 30 ký tự');
        }
        if (!address) {
            count++;
            setErrAddress('Vui lòng thêm địa chỉ');
        }
        if (isNaN(age) || age < 18) {
            count++;
            setErrAge('Tuổi phải là số và lơn hơn 18');
        }
        if (!phone || isNaN(phone) || phone.length > 13) {
            count++;
            setErrPhone('Điện thoại phải là số và không lớn 13 ký tự');
        }
        return count;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const err = check();
        if (err > 0) {
            return;
        }
        const data = {
            name,
            address,
            sex,
            age,
            phone,
        };
        console.log(data);
        await updateUser(id, data, accessToken, axiosJWT);
        notify();
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };
    useEffect(() => {
        const fethUser = async () => {
            const info = await getUserIfor(id, accessToken, axiosJWT);
            if (info) {
                if (info.name) {
                    setName(info.name);
                }
                if (info.address) {
                    setAddress(info.address);
                }
                setSex(info.sex);
                if (info.age) {
                    setAge(info.age);
                }
                if (info.phone) {
                    setPhone(info.phone);
                }
            }
        };
        fethUser();
    }, [id]);
    return (
        <div className={cx('Wrapper')} style={{ backgroundImage: `url('${productBGImage}')` }}>
            <form onSubmit={(e) => handleSubmit(e)} className={cx('container')}>
                <div className={cx('updateForm')}>
                    <h2 className={cx('updateFormHeader')}>Thông tin cá nhân</h2>
                    <div className={cx('input')}>
                        <span className={cx('text')}>Họ và tên</span>
                        <div style={{ width: '100%' }}>
                            <input
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                className={cx('inputText')}
                                placeholder=" Enter Your's Name"
                            ></input>
                            {nameErr && <span className={cx('err')}>{nameErr} </span>}
                        </div>
                    </div>
                    <div className={cx('input')}>
                        <span className={cx('text')}>Địa chỉ</span>
                        <div style={{ width: '100%' }}>
                            <input
                                value={address}
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}
                                className={cx('inputText')}
                                placeholder=" Enter Your's Address"
                            ></input>
                            {errAddress && <span className={cx('err')}>{errAddress} </span>}
                        </div>
                    </div>
                    <div className={cx('input')}>
                        <span className={cx('text')}>Giới tính</span>
                        <select className={cx('sexWrapper')} value={sex} onChange={(e) => setSex(e.target.value)}>
                            <option value={'Nam'}>Nam</option>
                            <option value={'Nữ'}>Nữ</option>
                            <option value={'Khác'}>Khác</option>
                        </select>
                    </div>
                    <div className={cx('input')}>
                        <span className={cx('text')}>Tuổi</span>
                        <div style={{ width: '100%' }}>
                            <input
                                value={age}
                                onChange={(e) => {
                                    setAge(e.target.value);
                                }}
                                className={cx('ageInput')}
                                placeholder="Your's age"
                            ></input>
                            {errAge && <span className={cx('err')}>{errAge} </span>}
                        </div>
                    </div>
                    <div className={cx('input')}>
                        <span className={cx('text')}>Điện thoại</span>
                        <div style={{ width: '100%' }}>
                            <input
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                                className={cx('inputText')}
                                placeholder="Enter Your's Phone Number"
                            ></input>
                            {errphone && <span className={cx('err')}>{errphone} </span>}
                        </div>
                    </div>
                    <div className={cx('buttonWrapper')}>
                        <Button op05 w100 bgGreen textWhite>
                            Cập nhật
                        </Button>
                    </div>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default UpdateInfo;
