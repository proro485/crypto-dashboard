import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="flex flex-col md:flex-row h-full w-full">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<></>} />
        <Route path="/crypto" element={<></>} />
      </Routes>
    </div>
  );
};

export default App;
