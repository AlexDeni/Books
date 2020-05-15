import React from 'react';
import { Price } from '../../../ui/Price';

export function ShowCardPrice({ selectedBooks }) {
    let showPrice = selectedBooks.reduce(function (bookPrice, num) {
        return bookPrice + num.price;
    }, 0);
    return <Price price={showPrice} />;
}
