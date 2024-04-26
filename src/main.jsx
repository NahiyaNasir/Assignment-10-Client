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

    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
