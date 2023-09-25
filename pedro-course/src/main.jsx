import React from 'react'
import ReactDOM from 'react-dom/client'
import Router2 from "./router2/Router2"
import Profile from './router2/Profile'
import Spinach from './router2/Spinach'
import Popeye from './router2/Popeye'
import DefaultProfile from './router2/DefaultProfile'

import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router2 />,
  },
  {
    path: "profile",
    element: <Profile />,
    children: [
      { index: true, element: <DefaultProfile />},
      { path: "spinach", element: <Spinach />},
      { path: "popeye", element: <Popeye />},
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

