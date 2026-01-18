import React from 'react'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Explorer from './pages/Explorer/Explorer'
import PageNotFound from './pages/Errors/404/PageNotFound'



function App() {
    const router = createBrowserRouter([
      {
        path:'/',
        errorElement:<PageNotFound />
      },
      {
        path:'/explorer',
        Component:Explorer
      }
    
    ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
