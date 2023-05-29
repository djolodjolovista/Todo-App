import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CounterScreen from './screens/CounterScreen';
import ToDoScreen from './screens/ToDoScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/counter" element={<CounterScreen />} />
          <Route path="/to-do/:filter?" element={<ToDoScreen />} />
          <Route path="*" element={<Navigate to="/to-do" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
