import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default () => {
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};
