import axios from 'axios';
import { GET_ALL_NEWS, OPEN_NEWS_PROPERTIES, ERROR_GET_NEWS } from './types';
import {API_NEWS_URL} from '../../helpers/api'

export const getNews = () => {
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

export const openNews = (id) => {
	return {
		type: OPEN_NEWS_PROPERTIES,
		payload: id,
	};
};
