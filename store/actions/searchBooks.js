export const SEARCH_NEED_BOOK = 'SEARCH_NEED_BOOK'

export const searchBooks = (books) => {
    return {
        type: SEARCH_NEED_BOOK,
        payload: books
    }
}