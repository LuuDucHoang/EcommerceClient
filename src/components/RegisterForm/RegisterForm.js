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
    const [confirm, setComfirm] = useState('');
    const [errUserName, setErrUserName] = useState('');
    const [errName, setErrName] = useState('');
    const [errConfirm, setErrComfirm] = useState('');
    const [errPassword, setErrPassword] = useState('');
    const [err, setErr] = useState('');

    const dispath = useDispatch();
    const navigate = useNavigate();
    const handleClearMessage = () => {
        setErrUserName('');
        setErrName('');
        setErrComfirm('');
        setErrPassword('');
        setErr('');
    };
    const handleValidate = () => {
        let err = 0;
        if (!userName) {
            setErrUserName('Vui lòng nhập tên đăng nhập');
            err++;
        }
        if (!password) {
            setErrPassword('Vui lòng nhập mật khẩu');
            err++;
        }
        if (password.length < 6) {
            setErrPassword('Vui lòng nhập mật khẩu lơn hơn hoặc bằng 6 ký tự');
            err++;
        }
        if (!name) {
            setErrName('Vui lòng nhập tên của  bạn');
            err++;
        }
        if (!errConfirm) {
            setErrComfirm('Vui lòng nhập lại mật khẩu ');
            err++;
        }
        if (confirm !== password) {
            setErrComfirm('Mật khẩu nhập lại không trùng với mật khẩu ');
            err++;
        }
        return err;
    };
    const handleRegister = async (e) => {
        e.preventDefault();
        handleClearMessage();
        const errCount = handleValidate();
        const newUser = {
            name,
            userName,
            password,
        };

        if (errCount === 0) {
            const x = await registerUser(newUser, dispath, navigate);
            setErr(x);
        }
    };
    return (
        <div className={cx('Wrapper')} style={{ backgroundImage: `url('${productBGImage}')` }}>
            <form onSubmit={handleRegister} className={cx('container')}>
                <div className={cx('loginForm')}>
                    <h2 className={cx('header')}>Sign up your account</h2>
                    <div className={cx('input')}>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className={cx('name')}
                            placeholder=" Enter Your's Name"
                        ></input>
                        {errName && <span className={cx('err')}>{errName} </span>}
                    </div>
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
                    <div className={cx('input')}>
                        <input
                            onChange={(e) => setComfirm(e.target.value)}
                            value={confirm}
                            className={cx('password')}
                            placeholder="Enter Comfirm Password"
                            type="password"
                        ></input>
                        {errConfirm && <span className={cx('err')}>{errConfirm} </span>}
                    </div>
                    <div className={cx('loginBtn')}>
                        {err && <span className={cx('err')}>{err} </span>}

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
