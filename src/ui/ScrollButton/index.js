import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ScrollButton = ({ scrollPoint }) => {
	const [isVisible, setVisible] = useState(false);

	useEffect(() => {
		document.addEventListener('scroll', () => {
			toScroll();
		});
	});

	const toScroll = () => {
		if (window.pageYOffset > scrollPoint) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	if(isVisible){
		return(
			<span className="scrollToTop" onClick={scrollToTop}>
				&#187;
			</span>
		)
	}
	else return ''
};

ScrollButton.propTypes = {
	scrollPoint: PropTypes.number,
};

ScrollButton.defaultProps = {
	scrollPoint: 300,
};

export { ScrollButton };
