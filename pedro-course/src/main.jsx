import React from 'react'
import ReactDOM from 'react-dom/client'
import Todo from "./todo/Todo"
import Fetch from './fetch/Fetch'
import Age from './fetch/Age'
import Excuse from './fetch/Excuse'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Excuse />
  </React.StrictMode>,
)
