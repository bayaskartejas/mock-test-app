
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';
import './App.css';

function App() {
  return (
    <div className='h-screen grid font-poppins'>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

