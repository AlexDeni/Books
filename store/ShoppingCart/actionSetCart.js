import {SET_SHOPPING_CART} from "./types";

export const actionSetCart = (title, price) => {
    return {
        type: SET_SHOPPING_CART,
        payload: title,
        price: price
    }
}