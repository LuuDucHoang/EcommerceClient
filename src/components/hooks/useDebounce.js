import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const hanlder = setTimeout(() => {
            return setDebounceValue(value);
        }, delay);
        return () => clearTimeout(hanlder);
    }, [value]);
    return debounceValue;
}

useDebounce.propTypes = {
    value: PropTypes.string,
    delay: PropTypes.number.isRequired,
};
export default useDebounce;
