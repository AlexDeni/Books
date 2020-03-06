const initialState = {
    books: []
};

export default function bookInfo (state = initialState, action) {
    switch (action.type) {
        case "SET_LIBRARY_FULL":
            return {...state, books: action.payload}
        default:
            return 'state'
    }
}

