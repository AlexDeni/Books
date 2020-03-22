import React from "react";
import PropTypes from "prop-types"
import cx from 'classnames'

function Layout({children, direction, justify, align, wrap, extraClass}){
    let classes = cx('layout', `layout__orientation_${direction}`,
        `layout__justify_${justify}`,
        `layout__align_${align}`,
        `layout__wrap_${wrap}`,
        extraClass);
    return(
        <div className={classes}>{children}</div>
    )
}
Layout.propTypes = {
    children: PropTypes.node,
    direction: PropTypes.string,
    justify: PropTypes.string,
    align: PropTypes.string,
    extraClass: PropTypes.string,
    wrap: PropTypes.string,
};
Layout.defaultProps = {
    direction: 'column',
    justify: 'start',
    wrap: 'nowrap',
    extraClass: ''
};

export {Layout}