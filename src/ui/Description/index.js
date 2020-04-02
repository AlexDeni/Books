import React from "react";
import PropTypes from 'prop-types';
import cx from 'classnames'

/**
 * @param {node}children - all text in paragraph
 * @param size - text size
 * @param color - text color
 * @param position - text position
 * @param extraClass - className
 */

function Description({children,size, color,extraClass,position}) {
    let classes = cx('description',
        `description__size_${size}`,
        `description__color_${color}`,
        `description__position_${position}`,
        extraClass
    );
    return (
        <p className={classes}>{children}</p>
    )
}
Description.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['s','m','l']),
    color: PropTypes.oneOf(['default', 'grey', 'white', 'dark']),
    position: PropTypes.oneOf(['left', 'center', 'right']),
    extraClass: PropTypes.string
};
Description.defaultProps = {
    color: 'default',
    className: '',
    position: 'left'
};

export {Description}