import React from 'react';
import './TodoItem.css';
import { useAppDispatch } from '../app/hooks';
import { Todo, deleteTodo, updateTodo } from '../features/todo/todoSlice';

const TodoItem = (todo: Todo, key: string) => {
  const dispatch = useAppDispatch();
  return (
    <li key={key}>
      <div className="item-container">
        <div className="delete-container">
          <span className="delete-item">
            <button onClick={() => dispatch(deleteTodo(todo))}>X</button>
          </span>
        </div>
        <input
          checked={todo.isCompleted}
          type="checkbox"
          onChange={() => dispatch(updateTodo(todo))}
        />
        <div className="text-container">
          <h4 className={`todo-title ${todo.isCompleted && 'finished-todo'}`}>{todo.name}</h4>
          <p className={`todo-text ${todo.isCompleted && 'finished-todo'}`}>{todo.text}</p>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
