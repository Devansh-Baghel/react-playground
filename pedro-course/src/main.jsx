import React from 'react'
import ReactDOM from 'react-dom/client'
import Todo from "./todo/Todo"
import Fetch from './fetch/Fetch'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Fetch />
  </React.StrictMode>,
)
