import { GET_ALL_NEWS, SEARCH_NEWS } from 'types';

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