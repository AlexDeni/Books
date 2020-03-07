import {combineReducers } from 'redux'
import allLibrary from './allLibrary'
import searchBooks from "./searchBooks";

const rootReducer  = combineReducers({
    allLibrary: allLibrary,
    searchBooks: searchBooks
});

export default rootReducer