import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { fetchTodos } from '../redux/actions';
import { Todo, getVisibleTodos } from '../redux/reducers/todo';
import { useParams } from 'react-router-dom';

const TodoList = () => {
  const todo1 = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch<any>();
  const { filter = 'all' } = useParams(); //params iz url-a

  const todos = getVisibleTodos(todo1, filter); //filtrira todo-ove na osnovu url-a

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className="Todo-List">
      <ul>
        {todos.map((todo: Todo) => (
          <div key={todo.id}>
            <TodoItem {...todo} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
