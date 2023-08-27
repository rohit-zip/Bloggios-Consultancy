import React from 'react'
import Base from '../../Base/Base'
import Signup from './Component/Signup'
import { Outlet } from 'react-router-dom'

const SignupScreen = () => {
  return (
    <Base bgColor={'linear-gradient(to bottom right, rgba(159, 154, 207, 0.2), rgba(139, 182, 218, 0.4))'}>
      <Signup />
    </Base>
  )
}

export default SignupScreen