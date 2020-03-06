import axios from 'axios';
export const SET_LIBRARY_FULL = "SET_LIBRARY_FULL";

export const getAllLibrary = () => {
    return (dispatch)=>{
        axios.get('./books.json')
            .then(books => {
                dispatch({
                    type: SET_LIBRARY_FULL,
                    payload: books.data

                })
            })
            .catch(err => {
                dispatch('fdfg');
            });
    }
}