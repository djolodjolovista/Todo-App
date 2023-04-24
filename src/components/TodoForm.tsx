import React from 'react';
import './TodoForm.css';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addNewTodo, updateCurrentText, updateCurrentTitle } from '../features/todo/todoSlice';

const TodoForm = () => {
  //*const currentTodo = useSelector((state: RootState) => state.todo.currentTodo);
  //*const currentTodoText = useSelector((state: RootState) => state.todo.currentTodoText);
  const currentTodo = useAppSelector((state) => state.todos.currentTodoTitle);
  const currentTodoText = useAppSelector((state) => state.todos.currentTodoText);
  const dispatch = useAppDispatch();

  const handleInputTextChange = (e: any) => {
    dispatch(updateCurrentText(e.target.value));
  };

  const handleInputChange = (e: any) => {
    dispatch(updateCurrentTitle(e.target.value));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //*dispatch(saveTodo(currentTodo, currentTodoText));
    dispatch(
      addNewTodo({
        name: currentTodo,
        text: currentTodoText,
        isCompleted: false,
        id: 0
      })
    );
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
