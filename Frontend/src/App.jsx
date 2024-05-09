import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Hotels from './pages/Hotels';
import HotelDetails from './pages/HotelDetails';

const App = () => {
  return (
    <BrowserRouter>    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/hotels' element={<Hotels/>} />
      <Route path='/hotels/:id' element={<HotelDetails/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
