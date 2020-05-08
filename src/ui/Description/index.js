import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * @param {node}children - all text in paragraph
 * @param size - text size
 * @param color - text color
 * @param position - text position
 * @param extraClass - className
 */

function Description({ children, size, color, extraClass, position, weight }) {
  let classes = cx(
    'description',
    `description__size_${size}`,
    `description__color_${color}`,
    `description__weight_${weight}`,
    `description__position_${position}`,
    extraClass
  );
  return <p className={classes}>{children}</p>;
}
Description.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  color: PropTypes.oneOf(['default', 'grey', 'white', 'dark', 'yellow']),
  position: PropTypes.oneOf(['left', 'center', 'right']),
  weight: PropTypes.oneOf(['500', '600', '900']),
  extraClass: PropTypes.string,
};
Description.defaultProps = {
  size: 'm',
  color: 'default',
  className: '',
  position: 'left',
  weight: '500',
};

export { Description };
