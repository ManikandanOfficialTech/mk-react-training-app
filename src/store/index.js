import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk'; // Use named import for thunk
import rootReducer from './Reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
