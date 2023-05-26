import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
//impost stye,img
import style from './Quantity.module.scss';

const cx = classNames.bind(style);
function Quantity() {
    const [number, setNumber] = useState(1);

    const increase = () => {
        setNumber(number + 1);
    };
    const decrease = () => {
        setNumber(number - 1);
    };
    return (
        <div className={cx('quantityInput')}>
            {number === 1 ? (
                <button className={cx('decreaseBtn', { disable: 'disale' })}>
                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                </button>
            ) : (
                <button onClick={decrease} className={cx('decreaseBtn')}>
                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                </button>
            )}
            <input value={number} onChange={() => {}} className={cx('increaseInput')}></input>
            <button onClick={increase} className={cx('increaseBtn')}>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
}

export default Quantity;
