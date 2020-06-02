import React from 'react';
import { Price } from '../../../ui';

export function ShowCardPrice({ selectedBooks }) {
	let cardPrice = selectedBooks.reduce(function (bookPrice, num) {
		return bookPrice + num.price;
	}, 0);
	return <Price price={cardPrice} />;
}
