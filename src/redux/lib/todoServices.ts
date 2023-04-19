import { Todo } from '../reducers/todo';

export const getTodos = () => {
  return fetch('http://localhost:8080/todos').then((res) => res.json());
};

export const createTodo = async (name: string) => {
  return (
    await fetch('http://localhost:8080/todos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, isCompleted: false })
    })
  ).json(); //ako nije JSON ne moze u store da ga upise
};

export const updateTodo = async (todo: Todo) => {
  return (
    await fetch(`http://localhost:8080/todos/${todo.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
  ).json(); //ako nije JSON ne moze u store da ga upise
};

export const destroyTodo = (id: number) => {
  return fetch(`http://localhost:8080/todos/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
};
