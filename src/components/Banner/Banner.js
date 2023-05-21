import classNames from 'classnames/bind';

//import component
import Button from '~/components/Button';

//import style,img
import style from './Banner.module.scss';
import bannerImg from '~/Stactic/images/banner.jpg';
import banImg from '~/Stactic/images/ban_img.png';
const cx = classNames.bind(style);
function Banner() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')} style={{ backgroundImage: `url('${bannerImg}')` }}>
                <div className={cx('container')}>
                    <div className={cx('bannerText')}>
                        <h1 className={cx('textBannerHeader')}>
                            <span className={cx('blodark')}>Romofyi</span>
                            <span>Trands 2023</span>
                        </h1>
                        <p className={cx('textBannerD')}>A huge fashion collection for ever</p>
                        <Button blue rounded>
                            Shop now
                        </Button>
                    </div>
                    <div className={cx('banImgWrapper')}>
                        <img src={banImg} alt="banImg" className={cx('banImg')}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
