import React from 'react'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Explorer from './pages/Explorer/Explorer'
import PageNotFound from './pages/Errors/404/PageNotFound'
import Best from './pages/Best/Best'
import Profile from './pages/Profile/Profile'
import Template from './pages/Template/Template'
import RealeasePage,{realeaseLoader} from './pages/RealeasePage/RealeasePage'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from './pages/Home/Home'
  
const queryClient = new QueryClient();

function App() {
  
    const router = createBrowserRouter([
      {
        path:'/',
        Component:Template,
        errorElement:<PageNotFound />,
        children:[
          {
        path:'/',
        Component:Home
      },
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
      },
      {
        path:'albums',
        children:[{
        path:':release',
        Component:RealeasePage,
        loader:realeaseLoader
      }]
      }
          
        ]
      }
    
    ])

  return (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
