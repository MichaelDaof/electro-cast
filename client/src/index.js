import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import api from './utils/api'
import searchReducer from './Search/reducer';
import App from './App';

let store = createStore(
  searchReducer, 
  applyMiddleware(thunk.withExtraArgument(api), logger)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
