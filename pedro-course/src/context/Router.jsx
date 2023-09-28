import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home form "./Home.jsx"
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
          <Route path="/profile" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Routing
