import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Componets/Home.jsx';
import Root from './Componets/Root.jsx';
import ErrorPage from './Componets/ErrorPage.jsx';
import AllItem from './Componets/Pages/AllItem.jsx';
import AddItem from './Componets/Pages/AddItem.jsx';
import MyList from './Componets/Pages/MyList.jsx';
import Login from './Componets/Pages/Login.jsx';
import Register from './Componets/Pages/Register.jsx';
import AuthProvider from './Componets/AuthProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/allItem",
        element:<AllItem></AllItem>

      },
      {
        path:"/addItem",
        element:<AddItem></AddItem>

      },
      {
        path:"/myList",
        element:<MyList></MyList>

      },
      {
        path:"/login",
        element:<Login></Login>

      },

 {
        path:"/register",
        element:<Register></Register>

      },
      
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
   <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
 </AuthProvider>
)
