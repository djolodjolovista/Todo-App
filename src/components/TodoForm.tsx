import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers';
import { updateCurrentTodo } from '../redux/actions';

const TodoForm = () => {
  const currentTodo = useSelector((state: RootState) => state.todo.currentTodo);
  const dispatch = useDispatch();
  const handleInputChange = (e: any) => {
    dispatch(updateCurrentTodo(e.target.value));
  };
  return (
    <form>
      <input type="text" value={currentTodo} onChange={handleInputChange} />
    </form>
  );
};

export default TodoForm;
