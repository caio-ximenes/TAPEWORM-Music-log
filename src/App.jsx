import React from 'react'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Explorer from './pages/Explorer/Explorer'
import PageNotFound from './pages/Errors/404/PageNotFound'
import Best from './pages/Best/Best'
import Profile from './pages/Profile/Profile'
import Template from './pages/Template/Template'
import RealeasePage,{realeaseLoader} from './pages/RealeasePage/RealeasePage'



function App() {
    const router = createBrowserRouter([
      {
        path:'/',
        Component:Template,
        errorElement:<PageNotFound />,
        children:[
          {
        path:'explore',
        Component:Explorer
      },
      {
        path:'best',
        Component:Best
      },
      {
        path:'profile',
        Component:Profile
      }
          
        ]
      },
      {
        path:'/:release',
        Component:RealeasePage,
        loader:realeaseLoader
      }
    
    ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
