import axios from 'axios';
export const GET_ALL_LIBRARY = "GET_ALL_LIBRARY";

export const getAllLibrary = () => {
    return (dispatch)=>{
        axios.get('./books.json')
            .then(books => {
                dispatch({
                    type: GET_ALL_LIBRARY,
                    payload: books.data

                })
            })
            .catch(err => {
                dispatch('error');
            });
    }
}