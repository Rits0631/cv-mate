import './App.css';
import Login from './mycomponents/Login'
import Register from './mycomponents/Register'
import Achievement from './mycomponents/Achievement'
import Profile from './mycomponents/Profile'
import Approval from './mycomponents/Approval'

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [val, updateVal] = useState("Ok")
  
  return (
    <BrowserRouter>

      <Routes>
      <Route path='' element={<Login/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='Achievement' element={<Achievement/>}></Route>
        <Route path='approval' element={<Approval/>}></Route>
        <Route path='Profile' element={<Profile/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
