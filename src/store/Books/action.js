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
					isLoading: false,
				});
			})
			.catch((error) => {
				dispatch({
					type: ERROR_GET_BOOK,
					payload: error.message,
					isLoading: false,
				});
			});
	};
};

export const bookProperties = (activeBookId) => {
	return {
		type: OPEN_BOOK_PROPERTIES,
		payload: activeBookId,
	};
};
