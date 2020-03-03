import books from '../../modules/ListBooks/books.json';

const initialState = {
    books: books
};

export default function bookInfo (state = initialState, action) {
    switch (action.type) {
        case "SET_BOOKS":
            return {...state, books: action.payload}
        default:
            return state
    }
}