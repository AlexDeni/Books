import { REMOVE_SHOP_CART, ADD_SHOP_CART, SET_SHOP_CART } from './types';

export const setCart = (id) => {
	return {
		type: SET_SHOP_CART,
		payload: id,
	};
};

export const removeBook = (id) => {
	return {
		type: REMOVE_SHOP_CART,
		payload: id,
	};
};

export const addBook = (id) => {
	return {
		type: ADD_SHOP_CART,
		payload: id,
	};
};
