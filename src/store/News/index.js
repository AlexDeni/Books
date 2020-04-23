import {GET_ALL_NEWS, OPEN_NEWS_PROPERTIES} from "./types";

const initialState = {
    news: [],
    id: [],
    loader: true
};

export default function reducerGetNews (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_NEWS:
            return {...state, news: action.payload, loader: false};
        case OPEN_NEWS_PROPERTIES:
            return {...state, id: action.payload};
        default:
            return state
    }
}