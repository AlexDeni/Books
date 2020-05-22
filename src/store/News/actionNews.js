import axios from 'axios';
import { GET_ALL_NEWS, OPEN_NEWS_PROPERTIES, ERROR_GET_NEWS } from './types';
const API_NEWS_URL = 'https://mysterious-reef-29460.herokuapp.com/api/v1/news';

export const actionGetNews = () => {
	return (dispatch) => {
		axios
			.get(API_NEWS_URL)
			.then((news) => {
				dispatch({
					type: GET_ALL_NEWS,
					payload: news.data,
					loader: false,
				});
			})
			.catch((error) => {
				dispatch({
					type: ERROR_GET_NEWS,
					payload: error.message,
					loader: false,
				});
			});
	};
};

export const actionOpenNews = (id) => {
	return {
		type: OPEN_NEWS_PROPERTIES,
		payload: id,
	};
};
