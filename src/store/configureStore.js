/**
 * Configures Redux store
 */

import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const middewares = [
    thunkMiddleware,
  ];

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
    )
  );

  return store;
}