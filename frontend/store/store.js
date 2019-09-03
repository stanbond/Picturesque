import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/root_reducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const conStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk, logger)));

export default conStore;