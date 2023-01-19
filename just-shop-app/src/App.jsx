import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './Signin';
import ShoppingItems from './ShoppingItems';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/items" element={<ShoppingItems />} />
    </Routes>
  </BrowserRouter>
);

export default App;
