import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * @param {node}children - all text which includes div
 * @param {string}wrap - block transfer
 * @param {string}justify - horizontal alignment
 * @param {string}align - vertical alignment
 * @param {string}direction - horizontal or vertical direction
 * @param extraClass - className
 */

function Layout({ children, direction, justify, align, wrap, extraClass }) {
  let classes = cx(
    'layout',
    `layout__orientation_${direction}`,
    `layout__justify_${justify}`,
    `layout__align_${align}`,
    `layout__wrap_${wrap}`,
    extraClass
  );
  return <div className={classes}>{children}</div>;
}
Layout.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(['row', 'column']),
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-around', 'space-evenly', 'space-between']),
  align: PropTypes.oneOf(['flex-start', 'center', 'baseline', 'flex-end']),
  extraClass: PropTypes.string,
  wrap: PropTypes.string,
};
Layout.defaultProps = {};

export { Layout };
