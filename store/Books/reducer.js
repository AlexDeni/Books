import {GET_ALL_BOOKS, SEARCH_NEED_BOOK, SET_RATING_BOOK, CLEAN_SEARCH_BOOK} from "./types";

const initialState = {
    books: [],
    loader: true
};

export default function reducerGetBooks (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_BOOKS:
            return {...state, books: action.payload, loader: false}
        case SEARCH_NEED_BOOK:
            return {...state, books: action.payload}
        case SET_RATING_BOOK:
            return {...state, books: action.payload}
        case CLEAN_SEARCH_BOOK:
            return {...state, books: ''}
        default:
            return state
    }
}

