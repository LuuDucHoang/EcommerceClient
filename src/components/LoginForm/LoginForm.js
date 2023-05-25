import { useState } from 'react';
import { postProductList, productList } from '~/services/productListService';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
//import component
import Button from '~/components/Button';
//import style,
import style from './LoginForm.module.scss';
import productBGImage from '~/Stactic/images/product_bg.jpg';
import { loginUser } from '~/redux/apiRequest';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(style);
function Form() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errUserName, setErrUserName] = useState('');
    const [errPassword, setErrPassword] = useState('');
    const [err, setErr] = useState('');
    const dispath = useDispatch();
    const navigate = useNavigate();

    const handleClearMessage = () => {
        setErrUserName('');
        setErrPassword('');
        setErr('');
    };
    const handleValidate = () => {
        let errCount = 0;
        if (!userName) {
            errCount++;
            setErrUserName('Vui lòng nhập tên đăng nhập');
        }
        if (!password) {
            errCount++;
            setErrPassword('Vui lòng nhập mật khẩu');
        }
        return errCount;
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        handleClearMessage();
        const errCount = handleValidate();
        const newUser = {
            userName,
            password,
        };
        if (errCount === 0) {
            const a = await loginUser(newUser, dispath, navigate);
            setErr(a);
        }
    };
    return (
        <div className={cx('Wrapper')} style={{ backgroundImage: `url('${productBGImage}')` }}>
            <form onSubmit={handleLogin} className={cx('container')}>
                <div className={cx('loginForm')}>
                    <h2 className={cx('header')}>Sign into your account</h2>
                    <div className={cx('input')}>
                        <input
                            onChange={(e) => setUserName(e.target.value)}
                            value={userName}
                            className={cx('userName')}
                            placeholder=" Enter User Name"
                        ></input>
                        {errUserName && <span className={cx('err')}>{errUserName} </span>}
                    </div>
                    <div className={cx('input')}>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className={cx('password')}
                            placeholder="Enter Password"
                            type="password"
                        ></input>
                        {errPassword && <span className={cx('err')}>{errPassword} </span>}
                    </div>
                    <span></span>
                    <div className={cx('loginBtn')}>
                        {err && <span className={cx('err')}>{err}</span>}
                        <Button>LOGIN</Button>
                    </div>
                    <span className={cx('registerTex')}>
                        Don't have an account?
                        <Link to={'/registerform'} className={cx('registerLink')}>
                            {' '}
                            Register here
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Form;
