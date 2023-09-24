import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Error from './pages/Error'
import Navbar from './Navbar'

function Routing() {
  return (
    <div>
      <Router>
        <h2>&dArr; This is navigation using Link from react-router-dom</h2>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Routing
