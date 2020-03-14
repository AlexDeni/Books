import axios from 'axios';
import {GET_ALL_BOOKS} from "./types";

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