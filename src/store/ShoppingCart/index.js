import {SET_SHOPPING_CART, REMOVE_SHOPPING_CART} from "./types";

const initialState = {
    id: [],
    count: 0
};

export default function reducerOrderBooks (state = initialState, action) {
    switch (action.type) {
        case SET_SHOPPING_CART:
            return {
                ...state,
                id: [...state.id, action.payload],
                count: state.count + 1
            };
        case REMOVE_SHOPPING_CART:
            return {
                ...state,
                id: action.payload,
                count: state.count - 1
            };
        default:
            return state
    }
}

