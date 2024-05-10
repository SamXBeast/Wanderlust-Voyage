import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Hotels from './pages/Hotels';
import HotelDetails from './pages/HotelDetails';
import Flights from './Sections/Flights';
import Cars from './Sections/Cars';
import Attractions from './Sections/Attractions';
import Taxis from './Sections/Taxis';

const App = () => {
  return (
    <BrowserRouter>    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/hotels' element={<Hotels/>} />
      <Route path='/hotels/:id' element={<HotelDetails/>} />
      <Route path='/flights' element={<Flights/>} />
      <Route path='/cars' element={<Cars/>} />
      <Route path='/attractions' element={<Attractions/>} />
      <Route path='/taxis' element={<Taxis/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
