import React from "react";
import cx from 'classnames';
import PropTypes from 'prop-types'

/**
 * @param {node}children - all text which includes button
 * @param {string}bStyle - all styles for  @param sizebutton
 * @param type - button types which we can use
 * @param {bool}disable
 * @param size - button size
 * @param onClick
 * @param extraClass - className
 */

function Button({children, value, bStyle, size, type, disable, onClick, extraClass}) {
    const className = cx('btn',
        `btn__bStyle_${bStyle}`,
        `btn__size_${size}`, extraClass
    );
    return(
        <button value={value} className={className} type={type} disabled={disable} onClick={onClick}>{children}</button>
    )
}

Button.propTypes ={
    children: PropTypes.any,
    type: PropTypes.oneOf(['button', 'submit']),
    onClick: PropTypes.func,
    bStyle: PropTypes.oneOf(['default', 'main', 'none', 'remove']),
    size: PropTypes.oneOf(['s','m','l', 'all']),
    disabled: PropTypes.bool,
    value: PropTypes.any,
};

Button.defaultProps = {
    bStyle: 'default',
    size: 'm',
    type: 'button',
    disable: false,
};

export {Button}