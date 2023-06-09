import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './Button.module.scss';

const cx = classNames.bind(style);
function Button({
    to,
    href,
    outline = false,
    small = false,
    large = false,
    disable = false,
    rounded = false,
    leftIcon,
    className,
    rightIcon,
    children,
    onClick,
    blue,
    textWhite,
    ml5,
    w100,
    bgRed,
    op05,
    mt15,
    bgGreen,
    sandybrownColor,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        outline,
        small,
        blue,
        large,
        disable,
        rounded,
        textWhite,
        ml5,
        w100,
        bgRed,
        mt15,
        bgGreen,
        op05,
        sandybrownColor,
        [className]: className,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    upload: PropTypes.bool,
    disable: PropTypes.bool,
    rounded: PropTypes.bool,
    leftIcon: PropTypes.node,
    className: PropTypes.string,
    rightIcon: PropTypes.node,
    children: PropTypes.node,
    onClick: PropTypes.func,
};
export default Button;
