import React from 'react'
import PropTypes from 'prop-types';
import './slider.scss';
import {Layout} from "../../ui/Layout";

function Dots({quantityDots, updateDots, displayDot}) {
    let dot = [];
    if (displayDot) {
        for (let i = 0; i < quantityDots.length; i++) {
            dot.push(<input type="radio" key={i} onClick={() => {
                updateDots(i)
            }} className='dot'/>)
        }
    }
    return (
        <Layout direction='row' justify='center' >
            {dot}
        </Layout>
    )
}

Dots.propTypes = {
    displayDot: PropTypes.bool
};
Dots.defaultProps  = {
    displayDot: false
};

export {Dots}

