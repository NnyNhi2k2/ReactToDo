import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard';
import Productlist from './pages/Productlist';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/productlist" element={<Productlist />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );

};



export default App;
