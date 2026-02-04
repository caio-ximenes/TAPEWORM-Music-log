import React from 'react'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Explorer from './pages/Explorer/Explorer'
import PageNotFound from './pages/Errors/404/PageNotFound'
import Best from './pages/Best/Best'
import Profile from './pages/Profile/Profile'



function App() {
    const router = createBrowserRouter([
      {
        path:'/',
        Component:Explorer,
        errorElement:<PageNotFound />
      },
      {
        path:'/explore',
        Component:Explorer
      },
      {
        path:'/best',
        Component:Best
      },
      {
        path:'/profile',
        Component:Profile
      }
    
    ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
