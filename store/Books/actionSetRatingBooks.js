import {SET_RATING_BOOK} from "./types";

export const actionSetRatingBooks = (books) => {
    console.log('rating', books)
    return {
        type: SET_RATING_BOOK,
        payload: books
    }
}

