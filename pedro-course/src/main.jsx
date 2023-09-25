import React from 'react'
import ReactDOM from 'react-dom/client'
import Router2 from "./router2/Router2"
import Profile from './router2/Profile'

import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router2 />,
  },
  {
    path: "/profile",
    element: <Profile />,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

