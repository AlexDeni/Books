import React from 'react';
import PropTypes from 'prop-types';
import './slider.scss';
import { Layout } from '../../ui';

const Dot = ({ active, updateDots, number }) => (
    <span
        onClick={() => {
            updateDots(number);
        }}
        style={{
            background: `${active ? '#f57904' : ''}`,
        }}
    />
);

const Dots = ({ quantityDots, updateDots, displayDot, currentImage }) => {
    if (displayDot) {
        return (
            <Layout direction="row" justify="center" extraClass="dots">
                {quantityDots.map((slide, i) => (
                    <Dot key={i} active={currentImage === i} number={i} updateDots={updateDots} />
                ))}
            </Layout>
        );
    }
};

Dots.propTypes = {
    displayDot: PropTypes.bool,
};
Dots.defaultProps = {
    displayDot: false,
};
export { Dots };
