import axios from 'axios';
import {GET_ALL_BOOKS, OPEN_BOOK_PROPERTIES} from "./types";

export const actionGetBooks = () => {
    return (dispatch)=>{
        axios.get('./books.json')
            .then(books => {
                dispatch({
                    type: GET_ALL_BOOKS,
                    payload: books.data,
                    loader: false
                })
            })
            .catch(err => {
                dispatch('error');
            });
    }
}

export const actionBookProperties = (id) => {
    return {
        type: OPEN_BOOK_PROPERTIES,
        payload: id
    }
};