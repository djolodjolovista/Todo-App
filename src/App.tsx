import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CounterScreen from './screens/CounterScreen';
import ToDoScreen from './screens/ToDoScreen';

function App() {
  const state = {
    todos: [
      { id: 1, name: 'Create Static UI', isCompleted: true },
      { id: 2, name: 'Create Initial State', isCompleted: true },
      { id: 3, name: 'Use State To Render UI', isCompleted: true }
    ]
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/counter" element={<CounterScreen />} />
          <Route path="/to-do" element={<ToDoScreen todos={state.todos} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
