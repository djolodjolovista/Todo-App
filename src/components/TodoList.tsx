import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';

const TodoList = () => {
  console.log('List rendering!');
  const todos = useSelector((state: RootState) => state.todo.todos);
  return (
    <div className="Todo-List">
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem {...todo} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
