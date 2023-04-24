import { combineReducers } from 'redux';
import counterReducer from './counter/counterSlice';
import todoReducer from './todo/todoSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer
});

export default rootReducer;
