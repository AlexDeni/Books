import {GET_ALL_BOOKS, OPEN_BOOK_PROPERTIES} from "./types";

const initialState = {
    books: [],
    id: [],
    loader: true
};

export default function reducerGetBooks (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_BOOKS:
            return {...state, books: action.payload, loader: false};
        case OPEN_BOOK_PROPERTIES:
            return {...state, id: action.payload};
        default:
            return state
    }
}

