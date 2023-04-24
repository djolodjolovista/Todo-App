import React from 'react';
import './ToDoScreen.css';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import Message from '../components/Message';
import Footer from '../components/Footer';
import useWindowSize from '../hooks/useWindowSize';
import Confetti from 'react-confetti';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toggleConfetti } from '../features/todo/todoSlice';

const ToDoScreen = () => {
  //const todosState = useSelector((state: RootState) => state.todo);
  const [width, height] = useWindowSize();
  //*const showConfetti = useSelector((state: RootState) => state.todo.showConfetti);
  const showConfetti = useAppSelector((state) => state.todos.showConfetti);
  const dispatch = useAppDispatch();

  //Unistavanje confetti-a pomocu useEffecta i timeout-a
  /*useEffect(() => {
    showConfetti &&
      setTimeout(() => {
        dispatch(toggleConfetti(false));
      }, 4000);
  }, [dispatch, showConfetti]);*/

  return (
    <div>
      <div className="Todo-App">
        {showConfetti && (
          <Confetti
            width={width}
            height={height}
            onConfettiComplete={() => dispatch(toggleConfetti(false))}
            numberOfPieces={200}
            recycle={false}
          />
        )}
        <Message />
        <TodoForm />
        <TodoList />
        <Footer />
      </div>
    </div>
  );
};

export default ToDoScreen;
