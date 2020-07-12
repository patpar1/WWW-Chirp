import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// Store components
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

// Import middleware
import middleware from './middleware';

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  middleware
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);