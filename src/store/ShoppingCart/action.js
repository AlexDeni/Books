import { REMOVE_SHOP_CART, ADD_SHOP_CART, SET_SHOP_CART } from './types';

export const setCart = (id) => {
	return {
		type: SET_SHOP_CART,
		payload: id,
	};
};

export const removeBook = (id, targetId) => {
	let i = id.indexOf(targetId);
	if (i >= 0) {
		id.splice(i, 1);
	}
	return {
		type: REMOVE_SHOP_CART,
		payload: id,
	};
};

export const addBook = (id, targetId) => {
	id.push(targetId);
	return {
		type: ADD_SHOP_CART,
		payload: id,
	};
};
