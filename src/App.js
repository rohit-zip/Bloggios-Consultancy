import React from 'react'
import HomeScreen from './HomeScreen/HomeScreen'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignupScreen from './Authentication/SignUp/SignupScreen';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/signup' element={<SignupScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App