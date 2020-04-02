import {combineReducers } from 'redux'
import reducerGetBooks from './Books'
import reducerOrderBooks from './ShoppingCart'
import reducerGetNews from "./News";

const rootReducer  = combineReducers({
    getBooks: reducerGetBooks,
    orderBooks: reducerOrderBooks,
    getNews: reducerGetNews,
});

export default rootReducer