import React from 'react'
import HomeScreen from './HomeScreen/HomeScreen'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/Bloggios-Consultancy",
    element: <HomeScreen />,
    // children: [
    //   {
    //     path: "landing",
    //     element: <Landing />,
    //   },
    // ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App