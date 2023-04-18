import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';
import todoReducer from './todo';

const rootReducer = combineReducers({
  counter: counterReducer, //npr u redux dev tool-u ce counterReducer biti prikazan kao 'counter'
  isLogged: loggedReducer,
  todo: todoReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
