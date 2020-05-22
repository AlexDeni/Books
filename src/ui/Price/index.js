import React from 'react';
import { Description } from '../Description';
import { getCurrencyPrice, getCurrencySymbol } from '../../helpers';

const Price = ({ color, price, size, position, extraClass, weight }) => {
	return (
		<Description
			weight={weight}
			extraClass={extraClass}
			color={color}
			size={size}
			position={position}
		>
			{getCurrencyPrice(price)}
			{getCurrencySymbol()}
		</Description>
	);
};

export { Price };
