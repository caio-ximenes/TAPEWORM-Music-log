import React from 'react'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Explorer from './pages/Explorer/Explorer'
import PageNotFound from './pages/Errors/404/PageNotFound'
import Best from './pages/Best/Best'




function App() {
    const router = createBrowserRouter([
      {
        path:'/',
        errorElement:<PageNotFound />
      },
      {
        path:'/explore',
        Component:Explorer
      },
      {
        path:'/best',
        Component:Best
      }
    
    ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
