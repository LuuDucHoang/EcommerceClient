import classNames from 'classnames/bind';

//import style,img
import style from './sixBox.module.scss';
import shoeImg from '~/Stactic/images/shoes.png';
import underwareImg from '~/Stactic/images/underwear.png';
import pantImg from '~/Stactic/images/pent.png';
import tshirtImg from '~/Stactic/images/t_shart.png';
import jacketImg from '~/Stactic/images/jakit.png';
import helImg from '~/Stactic/images/helbet.png';
const cx = classNames.bind(style);
function sixBox() {
    return (
        <div className="">
            <div className={cx('sixBoxWrapper')}>
                <div className={cx('itemBox', { yellow: 'yellow' })}>
                    <img className={cx('item')} alt="Shoes" src={shoeImg}></img>
                    <span className={cx('itemName')}>SHOES</span>
                </div>
                <div className={cx('itemBox', { darkBlue: 'darkBlue' })}>
                    <img className={cx('item')} alt="Shoes" src={underwareImg}></img>
                    <span className={cx('itemName')}>SHOES</span>
                </div>
                <div className={cx('itemBox', { yellow: 'yellow' })}>
                    <img className={cx('item')} alt="Shoes" src={pantImg}></img>
                    <span className={cx('itemName')}>SHOES</span>
                </div>{' '}
                <div className={cx('itemBox', { darkBlue: 'darkBlue' })}>
                    <img className={cx('item')} alt="Shoes" src={tshirtImg}></img>
                    <span className={cx('itemName')}>SHOES</span>
                </div>
                <div className={cx('itemBox', { yellow: 'yellow' })}>
                    <img className={cx('item')} alt="Shoes" src={jacketImg}></img>
                    <span className={cx('itemName')}>SHOES</span>
                </div>
                <div className={cx('itemBox', { darkBlue: 'darkBlue' })}>
                    <img className={cx('item')} alt="Shoes" src={helImg}></img>
                    <span className={cx('itemName')}>SHOES</span>
                </div>
            </div>
        </div>
    );
}

export default sixBox;
