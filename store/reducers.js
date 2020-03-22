import {combineReducers } from 'redux'
import reducerGetBooks from './Books'
import reducerOrderBooks from './ShoppingCart'

const rootReducer  = combineReducers({
    getBooks: reducerGetBooks,
    orderBooks: reducerOrderBooks
});

export default rootReducer