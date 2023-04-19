import React from 'react';
import { Todos } from '../screens/ToDoScreen';
import { AppDispatch } from '..';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/actions';
import './TodoItem.css';

const TodoItem = (todo: Todos, key: string) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <li key={key}>
      <span className="delete-item">
        <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
      </span>
      <input
        checked={todo.isCompleted}
        type="checkbox"
        onChange={() => dispatch(toggleTodo(todo.id))}
      />{' '}
      {todo.name}
    </li>
  );
};

export default TodoItem;
