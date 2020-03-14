import {CLEAN_SEARCH_BOOK} from "./types";

export const actionSearchBooks = (books) => {
    return {
        type: CLEAN_SEARCH_BOOK,
        payload: books
    }
}