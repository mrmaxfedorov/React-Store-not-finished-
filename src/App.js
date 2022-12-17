import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Cart } from './pages/Cart';
import { Item } from './pages/Item';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/item' element={<Item />} />
      </Routes>
    </div>
  );
}

export default App
