const initialState = {
    books: []
};

export default function searchBooks (state = initialState, action) {
    switch (action.type) {
        case "SEARCH_NEED_BOOK":
            return {...state, books: action.payload}
        default:
            return state
    }
}

