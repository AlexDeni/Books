const initialState = {
    books: []
};

export default function allLibrary (state = initialState, action) {
    switch (action.type) {
        case "GET_ALL_LIBRARY":
            return {...state, books: action.payload}
        default:
            return state
    }
}

