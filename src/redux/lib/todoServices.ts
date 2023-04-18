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
  ).json();
};
