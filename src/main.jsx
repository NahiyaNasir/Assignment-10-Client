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
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
import ProtectedRoute from './Componets/ProtectedRoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/crafts')
      },
      {
        path:"/allItem",
        element:<AllItem></AllItem>,
        loader:()=>fetch('http://localhost:5000/crafts')

      },
      {
        path:"/addItem",
        element:<ProtectedRoute><AddItem></AddItem></ProtectedRoute>

      },
      {
        path:"/myList",
        element:<ProtectedRoute><MyList></MyList></ProtectedRoute>

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
  <HelmetProvider>
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
  <ToastContainer></ToastContainer>
  </HelmetProvider>
 </AuthProvider>
)
