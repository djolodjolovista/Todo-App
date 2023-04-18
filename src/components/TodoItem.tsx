import React from 'react';
import { Todos } from '../screens/ToDoScreen';

const TodoItem = (todo: Todos) => {
  return (
    <li>
      <input defaultChecked={todo.isCompleted} type="checkbox" /> {todo.name}
    </li>
  );
};

export default TodoItem;
