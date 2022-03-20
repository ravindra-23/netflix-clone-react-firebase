import React, { useContext } from 'react'
import { Home, Signin, Signup, BrowseHome } from './pages'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import {SearchResults, PageNotFound} from './components'
import { UserContext } from './Context/authUser'
const App = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={currentUser ? <Navigate to='/browse/home' /> : <Signin />} />
        <Route path='/signup' element={currentUser ? <Navigate to='/browse/home' /> : <Signup />} />
        <Route path='/browse/:param' element={currentUser ? <BrowseHome /> : <Signin />} />
        <Route path='/search/:query' element={currentUser ? <SearchResults /> : <Signin />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App