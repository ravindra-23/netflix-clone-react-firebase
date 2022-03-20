import React from 'react'
import { Home, Signin, Signup, BrowseHome, BrowseMoviesPage, BrowseTvPage } from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchResults from './components/SearchResults/SearchResults'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/browse/home' element={<BrowseHome />} />
        <Route path='/browse/movies' element={<BrowseMoviesPage />} />
        <Route path='/browse/tv' element={<BrowseTvPage />} />
        <Route path='/search/:query' element={<SearchResults />} />
      </Routes>
    </Router>
  )
}

export default App