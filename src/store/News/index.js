import {GET_ALL_NEWS} from "./types";

const initialState = {
    news: [],
    id: [],
    loader: true
};

export default function reducerGetNews (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_NEWS:
            return {...state, news: action.payload, loader: false};
        default:
            return state
    }
}