import React from 'react'
import Base from '../../Base/Base'
import Signup from './Component/Signup'
import { Outlet } from 'react-router-dom'

const SignupScreen = () => {
  return (
    <Base>
      <Signup />
    </Base>
  )
}

export default SignupScreen