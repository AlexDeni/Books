import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

function SlideImg({ image, size, extraClass, index }) {
  let className = cx('slide', `slide__size_${size}`, extraClass);
  return <img src={image[index].image} alt="" className={className} />;
}

SlideImg.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l', 'allWidth']),
};
SlideImg.defaultProps = {
  size: 'm',
};

export { SlideImg };
