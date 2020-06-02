 import axios from 'axios';
import { GET_ALL_BOOKS, OPEN_BOOK_PROPERTIES, ERROR_GET_BOOK } from './types';

export const getBooks = () => {
	return (dispatch) => {
		axios
			.get('./books.json')
			.then((books) => {
				dispatch({
					type: GET_ALL_BOOKS,
					payload: books.data,
					loader: false,
				});
			})
			.catch((error) => {
				dispatch({
					type: ERROR_GET_BOOK,
					payload: error.message,
					loader: false,
				});
			});
	};
};

export const bookProperties = (id) => {
	return {
		type: OPEN_BOOK_PROPERTIES,
		payload: id,
	};
};
