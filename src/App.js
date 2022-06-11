import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';
import Home from './components/Home';
import News from './components/News';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="flex flex-col md:flex-row h-full w-full">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/crypto" element={<Cryptocurrencies />} />
        <Route path="/crypto/:id" element={<CryptoDetails />} />
      </Routes>
    </div>
  );
};

export default App;
