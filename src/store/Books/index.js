import { GET_ALL_BOOKS, OPEN_BOOK_PROPERTIES, ERROR_GET_BOOK } from './types';

const initialState = {
  books: [],
  id: [],
  loader: true,
  error: '',
};

export default function reducerGetBooks(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return { ...state, books: action.payload, loader: false };
    case OPEN_BOOK_PROPERTIES:
      return { ...state, id: action.payload };
    case ERROR_GET_BOOK:
      return { ...state, loader: false, error: action.payload };
    default:
      return state;
  }
}
