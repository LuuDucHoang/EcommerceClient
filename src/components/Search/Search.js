import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
//import component
import { useDebounce } from '~/components/hooks';
import { searchServices } from '~/services/productListService';
//import style,img
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ProductItem from '../productItem/ProductItem';
import style from './Search.module.scss';
const cx = classNames.bind(style);
function Search() {
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [inputBlur, setBlurInput] = useState(false);
    const debouncedValue = useDebounce(searchValue, 500);
    const hanldeChangInput = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            setSearchValue(inputValue);
        }
    };
    const handleHideResult = () => {
        setBlurInput(false);
    };
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fethApi = async () => {
            const data = await searchServices(debouncedValue);
            if (data) {
                setSearchResult(data.message);
            }
        };
        fethApi();
    }, [debouncedValue]);
    return (
        <div className={cx('ccc')}>
            <HeadlessTippy
                onClickOutside={handleHideResult}
                visible={inputBlur && searchResult.length > 0}
                interactive
                render={() => (
                    <div className={cx('itemSeacrhWrapper')}>
                        {searchResult.map((data, index) => (
                            <ProductItem bg m0 w50 w100 h117 w117 df data={data} index={index}></ProductItem>
                        ))}
                    </div>
                )}
                placement="bottom-end"
            >
                <div className={cx('searchInputWrapper')}>
                    <input
                        spellCheck={false}
                        onFocus={() => setBlurInput(true)}
                        ref={inputRef}
                        value={searchValue}
                        onChange={(e) => hanldeChangInput(e)}
                        placeholder="Entrer keyword..."
                        className={cx('searchInput')}
                    ></input>
                    <div className={cx('searchIcon')}>
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
