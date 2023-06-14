import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './Screen/HomeScreen'
import HomeScreen from './Screen/HomeScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    // children: [
    //   {
    //     path: "landing",
    //     element: <Landing />,
    //   },
    // ]
  },
  {
    path: "/landing",
    element: <Landing />
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App