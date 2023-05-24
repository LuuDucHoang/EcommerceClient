import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
//import component
import Button from '~/components/Button';
//import style,
import style from './RegisterForm.module.scss';
import productBGImage from '~/Stactic/images/product_bg.jpg';
import { registerUser } from '~/redux/apiRequest';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(style);
function RegisterForm() {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispath = useDispatch();
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = {
            name,
            userName,
            password,
        };
        const handle = async () => {
            const x = await registerUser(newUser, dispath, navigate);
            console.log(x);
        };
        handle();
    };
    return (
        <div className={cx('Wrapper')} style={{ backgroundImage: `url('${productBGImage}')` }}>
            <form onSubmit={handleRegister} className={cx('container')}>
                <div className={cx('loginForm')}>
                    <h2 className={cx('header')}>Sign up your account</h2>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className={cx('name')}
                        placeholder=" Enter Name"
                    ></input>
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
                        <Button>Create</Button>
                    </div>
                    <span className={cx('registerTex')}>
                        You already owned an account?
                        <Link to={'/loginform'} className={cx('registerLink')}>
                            {' '}
                            Login here
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
