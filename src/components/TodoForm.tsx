import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers';
import { saveTodo, updateCurrentTodo, updateCurrentTodoText } from '../redux/actions';
import { AppDispatch } from '..';
import './TodoForm.css';

const TodoForm = () => {
  const currentTodo = useSelector((state: RootState) => state.todo.currentTodo);
  const currentTodoText = useSelector((state: RootState) => state.todo.currentTodoText);
  const dispatch = useDispatch<AppDispatch>();

  const handleInputTextChange = (e: any) => {
    dispatch(updateCurrentTodoText(e.target.value));
  };

  const handleInputChange = (e: any) => {
    dispatch(updateCurrentTodo(e.target.value));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(saveTodo(currentTodo, currentTodoText));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="inputs-container">
          <input
            required
            type="text"
            placeholder="New todo title"
            value={currentTodo}
            onChange={handleInputChange}
          />
          <textarea
            placeholder="New todo text"
            name="todo-text"
            value={currentTodoText}
            onChange={handleInputTextChange}
            required
          />
        </div>
        <button className="submit-button" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
