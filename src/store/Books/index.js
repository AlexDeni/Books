import { GET_ALL_BOOKS, OPEN_BOOK_PROPERTIES, ERROR_GET_BOOK } from './types';

const initialState = {
	books: [],
	activeBookId: [],
	isLoading: true,
	error: '',
};

export default function reducerGetBooks(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_BOOKS:
			return { ...state, books: action.payload, isLoading: false };
		case OPEN_BOOK_PROPERTIES:
			return { ...state, activeBookId: action.payload };
		case ERROR_GET_BOOK:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
}
