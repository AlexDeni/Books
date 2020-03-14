import {SEARCH_NEED_BOOK} from "./types";

export const actionSearchBooks = (books) => {
    return {
        type: SEARCH_NEED_BOOK,
        payload: books
    }
}