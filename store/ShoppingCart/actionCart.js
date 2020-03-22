import {REMOVE_SHOPPING_CART, SET_SHOPPING_CART} from "./types";

export const actionSetCart = (id) => {
    return {
        type: SET_SHOPPING_CART,
        payload: id,
    }
};

export const actionRemoveBook = (id) => {
    return {
        type: REMOVE_SHOPPING_CART,
        payload: id
    }
};