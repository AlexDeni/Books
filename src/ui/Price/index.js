import React from 'react';
import { Description } from '../Description';
import './style.scss';

//Курс долара
const dol = 25;
//Курс евро
const eur = 27.5;
//Валюта
const currency = 'UA';

const getCurrencySymbol = (currency) => {
    switch (currency) {
        case 'UA':
            return <span className="price_indent">грн</span>;
        case 'USD':
            return <span className="price_indent">&#36;</span>;
        case 'EUR':
            return <span className="price_indent">&#8364;</span>;
        default:
            return <span className="price_indent">грн</span>;
    }
};

function getCurrencyPrice(currency, price) {
    switch (currency) {
        case 'UA':
            return Math.floor(price);
        case 'USD':
            return Math.floor(price / dol);
        case 'EUR':
            return Math.floor(price / eur);
        default:
            return Math.floor(price);
    }
}

const Price = ({ color, price, size, position, extraClass, weight }) => {
    return (
        <Description weight={weight} extraClass={extraClass} color={color} size={size} position={position}>
            {getCurrencyPrice(currency, price)}
            {getCurrencySymbol(currency)}
        </Description>
    );
};

export { Price };
