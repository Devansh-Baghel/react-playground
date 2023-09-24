import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Menu from './pages/Menu'

function Routing() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Routing
