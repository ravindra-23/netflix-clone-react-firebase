import React from 'react'
import { Home, Signin } from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </Router>
  )
}

export default App