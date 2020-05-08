import { GET_ALL_NEWS, OPEN_NEWS_PROPERTIES, ERROR_GET_NEWS } from './types';

const initialState = {
  news: [],
  id: [],
  loader: true,
  error: '',
};

export default function reducerGetNews(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_NEWS:
      return { ...state, news: action.payload, loader: false };
    case OPEN_NEWS_PROPERTIES:
      return { ...state, id: action.payload };
    case ERROR_GET_NEWS:
      return { ...state, error: action.payload, loader: false };
    default:
      return state;
  }
}
