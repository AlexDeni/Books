import { GET_ALL_BOOKS, SEARCH_BOOKS } from 'types';

export function getBooks(dispatch) {
    dispatch({
        type: GET_ALL_BOOKS,
        payload: 'ssdasdasd',
    })
}

export function searchBooks(dispatch) {
    dispatch({
        type: SEARCH_BOOKS,
        payload: 'ssdasdasd',
    })
}