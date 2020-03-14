import {combineReducers } from 'redux'
import reducerGetBooks from './Books/reducer'
import reducerOrderBooks from './ShoppingCart/reducer'

const rootReducer  = combineReducers({
    getBooks: reducerGetBooks,
    orderBooks: reducerOrderBooks
});

export default rootReducer