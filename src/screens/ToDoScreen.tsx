import React from 'react';
import './ToDoScreen.css';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers';

export interface Todos {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface StateToDo {
  todos: Todos[];
}

const ToDoScreen = () => {
  //const todosState = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="Todo-App">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default ToDoScreen;
