import classNames from 'classnames/bind';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import component
import Button from '~/components/Button';

//import style,img
import style from './Modal.module.scss';
const cx = classNames.bind(style);

function Modal({ isOpen, title, des, success = '', successBtn, clickSuccse, random }) {
    const [open, setOpen] = useState(isOpen);
    const wrapper = useRef();
    const modal = useRef();
    const handleCLick = () => {
        console.log(1);
    };
    const clickOutSide = (e) => {
        if (!modal.current.contains(e.target)) {
            setOpen(false);
        }
    };
    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen, random]);
    // eslint-disable-next-line no-lone-blocks
    {
        return open ? (
            <div
                onClick={(e) => {
                    clickOutSide(e);
                }}
                ref={wrapper}
                className={cx('modal')}
            >
                <div ref={modal} className={cx('modalWrapper')}>
                    <div ref={modal} className={cx('modalHeader')}>
                        <FontAwesomeIcon style={{ color: 'red' }} icon={faWarning}></FontAwesomeIcon>
                        <h3 className={cx('modalHeaderTitle')}>{title || 'Bạn chưa đăng nhập'} </h3>
                    </div>
                    <div className={cx('modalBody')}>
                        <span className={cx('modalBodyTitle')}>{des || 'Bạn có muốn tới trang đăng nhập không?'}</span>
                        <div className={cx('modalBodyDes')}>
                            <Button onClick={() => setOpen(false)} textWhite bgRed>
                                Đóng
                            </Button>
                            <Button to={success || '/loginform'} onClick={() => setOpen(false)} bgGreen textWhite>
                                {successBtn || 'Đăng nhập'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            ''
        );
    }
}

export default Modal;
