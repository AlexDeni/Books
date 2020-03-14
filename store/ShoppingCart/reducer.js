import {SET_SHOPPING_CART, REMOVE_SHOPPING_CART} from "./types";

const initialState = {
    title: [],
    price: 0,
    count: 0
};

export default function reducerOrderBooks (state = initialState, action) {
    switch (action.type) {
        case SET_SHOPPING_CART:
            return {
                ...state,
                title: [...state.title, action.payload],
                price: state.price + action.price,
                count: state.count + 1
            };
        case REMOVE_SHOPPING_CART:
            return {
                ...state,
                title: action.payload,
                price: state.price - action.price,
                count: state.count - 1
            };
        default:
            return state
    }
}

