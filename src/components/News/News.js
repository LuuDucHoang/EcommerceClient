import classNames from 'classnames/bind';

import style from './News.module.scss';
import newImg from '~/Stactic/images/news_img1.jpg';

const cx = classNames.bind(style);
function News() {
    return (
        <div className={cx('newItem')}>
            <div className={cx('newsImgWrapper')}>
                <img src={newImg} alt="NewImg" className={cx('newImg')}></img>
            </div>
            <div className={cx('newDetailWrapper')}>
                <h3 className={cx('newsTitle')}>Specimen book. It has survived not only five</h3>
                <span className={cx('newsTime')}>7 July 2019</span>
                <p className={cx('newsDes')}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
    );
}

export default News;
