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
    const dispath = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const newUser = {
            userName,
            password,
        };
        loginUser(newUser, dispath, navigate);
    };
    return (
        <div className={cx('Wrapper')} style={{ backgroundImage: `url('${productBGImage}')` }}>
            <form onSubmit={handleLogin} className={cx('container')}>
                <div className={cx('loginForm')}>
                    <h2 className={cx('header')}>Sign into your account</h2>
                    <input
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                        className={cx('userName')}
                        placeholder=" Enter User Name"
                    ></input>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className={cx('password')}
                        placeholder="Enter Password"
                        type="password"
                    ></input>
                    <div className={cx('loginBtn')}>
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