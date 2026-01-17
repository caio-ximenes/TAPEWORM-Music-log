import React from 'react'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'



function App() {
    const router = createBrowserRouter([
      {
        path:'/'
      }
    
    ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
