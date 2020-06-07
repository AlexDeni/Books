import React from 'react';
import { USD, EUR, currency } from '../global/currency';

export function getCurrencySymbol() {
	switch (currency) {
		case 'UA':
		default:
			return 'грн';
		case 'USD':
			return '$';
		case 'EUR':
			return '€';
	}
}

export function getCurrencyPrice(price) {
	switch (currency) {
		case 'UA':
			return Math.floor(price);
		case 'USD':
			return Math.floor(price / USD);
		case 'EUR':
			return Math.floor(price / EUR);
		default:
			return Math.floor(price);
	}
}

export function checkImage({ image, withoutImage }) {
	if (image) {
		return image;
	}
	return withoutImage;
}

export function clipText (text, count) {
	text = text.trim();
	if (text.length < count) {
		return text;
	}
	text = text.slice(0, count);
	return text.trim() + '...';
}
