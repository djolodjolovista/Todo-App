import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useParams } from 'react-router-dom';
import './TodoList.css';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Status, Todo, fetchTodos, getVisibleTodos } from '../features/todo/todoSlice';

const TodoList = () => {
  const { filter = 'all' } = useParams(); //params iz url-a

  const fetchedTodos = useAppSelector((state) => state.todos.todos);
  const todosStatus = useAppSelector((state) => state.todos.status);
  const dispatch = useAppDispatch();

  const todos = getVisibleTodos(fetchedTodos, filter); //filtrira todo-ove na osnovu url-a

  useEffect(() => {
    if (todosStatus === Status.IDLE) {
      dispatch(fetchTodos());
    }
  }, []);

  return (
    <div className="Todo-List">
      <ul>
        {todos.map((todo: Todo) => (
          <div className="animated-todo-item" key={todo.id}>
            <TodoItem {...todo} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
