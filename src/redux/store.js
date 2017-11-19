import { createStore, applyMiddleware, compose } from 'redux';

import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import rootReducer from './reducers';
import config from '../config';

export const history = createHistory();

const client = axios.create({
  // all axios can be used, shown in axios documentation
  baseURL: config.apiEndpoint,
  responseType: 'json',
});

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history), axiosMiddleware(client)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(rootReducer, initialState, composedEnhancers);
