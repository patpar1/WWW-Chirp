import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';

import logger from './logger';
import rootReducer from '../reducers'

// Create a store and configure it with the middleware
export default function configureStore(preloadedState = {}) {
    const middleware = [thunk, logger];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(...middleware)))

    return store
}
