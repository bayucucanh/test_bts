// src/redux/index.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducers';
import checklistReducer from './checklistReducers';

const rootReducer = combineReducers({
  auth: authReducer,
  checklist: checklistReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
