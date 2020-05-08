import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Layout } from '../Layout';
import './style.scss';

const Title = ({ children, position, color, extraClass, tagName }) => {
  let className = cx('title', `title__position_${position}`, `title__color_${color}`, extraClass);
  return <Layout extraClass="block_t">{React.createElement(tagName, { className }, children)}</Layout>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['left', 'right', 'center']),
  tagName: PropTypes.oneOf(['h1', 'h2']),
  color: PropTypes.oneOf(['default', 'blue']),
  extraClass: PropTypes.string,
};
Title.defaultProps = {
  position: 'left',
  tagName: 'h2',
  color: 'default',
};

export { Title };
