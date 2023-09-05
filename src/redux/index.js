// src/redux/index.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducers';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;