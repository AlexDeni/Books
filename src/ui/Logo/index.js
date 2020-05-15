import React from 'react';
import logo from '../../static/logo.png';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

const Logo = ({ size }) => {
    let logoSize = cx('logo', `logo__size_${size}`);
    return <img className={logoSize} src={logo} alt="logo" />;
};

Logo.propTypes = {
    size: PropTypes.oneOf(['s', 'm', 'l']),
};
Logo.defaultProps = {
    size: 'm',
};

export { Logo };
