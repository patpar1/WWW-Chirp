import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css'
import App from './components/App';

// Store components
import { Provider } from 'react-redux';
import configureStore from './middleware';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);