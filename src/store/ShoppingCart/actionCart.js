import {REMOVE_SHOP_CART, ADD_SHOP_CART, SET_SHOP_CART} from "./types";

export const actionSetCart = (id) => {
    return {
        type: SET_SHOP_CART,
        payload: id,
    }
};

export const actionRemoveBook = (id) => {
    return {
        type: REMOVE_SHOP_CART,
        payload: id
    }
};
export const actionAddBook = (id) => {
    return {
        type: ADD_SHOP_CART,
        payload: id
    }
};