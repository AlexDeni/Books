import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './store/reducers'


export default () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware)
    )
}