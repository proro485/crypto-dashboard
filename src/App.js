import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/news" element={<></>} />
        <Route path="/crypto" element={<></>} />
      </Routes>
    </div>
  );
};

export default App;
