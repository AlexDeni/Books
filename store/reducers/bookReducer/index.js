import { GET_ALL_BOOKS, SEARCH_BOOKS } from 'types';

const initialState = {
    books: []
};

export default function bookReducer (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_BOOKS:
            return {...state, books: action.payload};
        case SEARCH_BOOKS:
            return {...state, books: action.payload};
        default:
            return state;
    }
}

