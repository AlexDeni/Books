import React from "react";
import cx from 'classnames';
import PropTypes from 'prop-types'

/**
 * @param {node}children - all data which includes button
 * @param {string}bStyle - all styles for  @param sizebutton
 * @param type
 * @param disable
 * @param size
 * @param onClick
 * @param extraClass
 */

function Button({children, bStyle, size, type, disable, onClick, extraClass}) {
    const className = cx('button',
        `button__style_${bStyle}`,
        `button__size_${size}`, extraClass
    );
    return(
        <button className={className} type={type} disabled={disable} onClick={onClick}>{children}</button>
    )
}

Button.propTypes ={
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['button', 'submit']),
    onClick: PropTypes.func,
    style: PropTypes.oneOf(['green', 'red']),
    size: PropTypes.oneOf(['s','m','l']),
    disabled: PropTypes.bool
};

Button.defaultProps = {
    bStyle: 'green',
    size: 'm',
    type: 'button',
    disable: false,
};

export {Button}