import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers';
import { saveTodo, updateCurrentTodo } from '../redux/actions';
import { AppDispatch } from '..';

const TodoForm = () => {
  const currentTodo = useSelector((state: RootState) => state.todo.currentTodo);
  const dispatch = useDispatch<AppDispatch>();
  const handleInputChange = (e: any) => {
    dispatch(updateCurrentTodo(e.target.value));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(saveTodo(currentTodo));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={currentTodo} onChange={handleInputChange} />
    </form>
  );
};

export default TodoForm;
