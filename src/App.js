import React from 'react'
import HomeScreen from './HomeScreen/HomeScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupScreen from './Authentication/SignUp/SignupScreen';
import OtpScreen from './Authentication/SignUp/OtpScreen';
import ServicesScreen from './Screen/ServicesScreen';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/signup' element={<SignupScreen />} />
        <Route path='/otp' element={<OtpScreen />} />
        <Route path='/services' element={<ServicesScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App