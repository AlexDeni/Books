import React from 'react';
import { Price } from '../../../ui';

export function ShowCardPrice({ selectedBooks }) {
	// showPrice не корректное название переменной
	let showPrice = selectedBooks.reduce(function (bookPrice, num) {
		return bookPrice + num.price;
	}, 0);
	return <Price price={showPrice} />;
}
