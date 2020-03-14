import {REMOVE_SHOPPING_CART} from "./types";

export const actionRemoveBook = (title, price) => {
    return {
        type: REMOVE_SHOPPING_CART,
        payload: title,
        price: price
    }
}