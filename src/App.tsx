import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CounterScreen from './screens/CounterScreen';
import ToDoScreen from './screens/ToDoScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/counter" element={<CounterScreen />} />
          <Route path="/to-do/:filter?" element={<ToDoScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
