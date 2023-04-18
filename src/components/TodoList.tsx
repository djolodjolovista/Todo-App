import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { fetchTodos } from '../redux/reducers/todo';

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

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
