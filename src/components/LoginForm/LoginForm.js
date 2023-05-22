import { useState } from 'react';
import { postProductList, productList } from '~/services/productListService';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
//import component
import Button from '~/components/Button';
//import style,
import style from './LoginForm.module.scss';
import productBGImage from '~/Stactic/images/product_bg.jpg';

const cx = classNames.bind(style);
function Form() {
    const action = async (data) => {
        const resaults = await postProductList(data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(resaults);
    };
    return (
        <div className={cx('Wrapper')} style={{ backgroundImage: `url('${productBGImage}')` }}>
            <div className={cx('container')}>
                <div className={cx('loginForm')}>
                    <h2 className={cx('header')}>Sign into your account</h2>
                    <input className={cx('userName')} placeholder=" Enter User Name"></input>
                    <input className={cx('password')} placeholder="Enter Password" type="password"></input>
                    <div className={cx('loginBtn')}>
                        <Button>LOGIN</Button>
                    </div>
                    <span className={cx('registerTex')}>
                        Don't have an account?
                        <Link className={cx('registerLink')}> Register here</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Form;
