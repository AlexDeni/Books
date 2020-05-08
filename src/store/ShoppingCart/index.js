import { ADD_SHOP_CART, REMOVE_SHOP_CART, SET_SHOP_CART } from './types';

const initialState = {
  id: [],
  count: 0,
};

export default function reducerOrderBooks(state = initialState, action) {
  switch (action.type) {
    case SET_SHOP_CART:
      return {
        ...state,
        id: [...state.id, action.payload],
        count: state.count + 1,
      };
    case ADD_SHOP_CART:
      return {
        ...state,
        id: action.payload,
        count: state.count + 1,
      };
    case REMOVE_SHOP_CART:
      return {
        ...state,
        id: action.payload,
        count: action.payload.length,
      };

    default:
      return state;
  }
}
