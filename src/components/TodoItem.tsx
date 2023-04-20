import React from 'react';
import { AppDispatch } from '..';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/actions';
import './TodoItem.css';
import { Todo } from '../redux/reducers/todo';

const TodoItem = (todo: Todo, key: string) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <li key={key}>
      <div className="item-container">
        <div className="delete-container">
          <span className="delete-item">
            <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
          </span>
        </div>
        <input
          checked={todo.isCompleted}
          type="checkbox"
          onChange={() => dispatch(toggleTodo(todo.id))}
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
