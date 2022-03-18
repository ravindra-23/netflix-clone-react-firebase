import React, { useState } from 'react'
import { Card, Footer } from '../index'
import BrowserHeader from './BrowserHeader/BrowserHeader'
import requests from '../../Axios/requests'

const BrowseContent = () => {
  
  
  const [showMovies, setShowMovies] = useState(false)
  const [showTv, setShowTv] = useState(false)
  const [showHome, setShowHome] = useState(true)

  const handleHome = () => {
    setShowHome(true)
    setShowMovies(false)
    setShowTv(false)
  }

  const handleMovies = () => {
    setShowHome(false)
    setShowMovies(true);
    setShowTv(false)
  }

  const handleTv = () => {
    setShowHome(false)
    setShowMovies(false);
    setShowTv(true);
  }
  

  
 
  return (
    <>
      <BrowserHeader handleMovies={handleMovies} handleTv={handleTv} handleHome={handleHome} />

      {showHome && 
      <>
        <Card title='Netflix Originals' id='NOT' fetchUrl={requests.fetchNetflixOriginalsTV} />
        <Card title='Top Rated' id='TR' fetchUrl={requests.fetchTopRated} />
        <Card title='Action' id='AM' fetchUrl={requests.fetchActionMovies} />
        <Card title='Trending TV' id='TT' fetchUrl={requests.fetchTrendingTV} />
      </>
      }

      {showMovies && 
      <>
        <Card title='Top Rated' id='TR' fetchUrl={requests.fetchTopRated} />
        <Card title='Action' id='AM' fetchUrl={requests.fetchActionMovies} />
        <Card title='Trending' id='TN' fetchUrl={requests.fetchTrending} />
        <Card title='Romantic' id='RM' fetchUrl={requests.fetchRomanceMovies} />
        <Card title='Comedy' id='CM' fetchUrl={requests.fetchComedyMovies} />
        <Card title='Horror' id='HM' fetchUrl={requests.fetchHorrorMovies} />
        <Card title='Documentries' id='DM' fetchUrl={requests.fetchDocumentaries} />
      </>
      }

      {showTv && 
      <>
        <Card title='Netflix Originals' id='NOT' fetchUrl={requests.fetchNetflixOriginalsTV} />
        <Card title='Top Rated' id='TRT' fetchUrl={requests.fetchTopRatedTV} />
        <Card title='Trending TV' id='TT' fetchUrl={requests.fetchTrendingTV} />
        <Card title='Popular' id='PT' fetchUrl={requests.fetchPopularTV} />
        <Card title='Airing Today' id='AT' fetchUrl={requests.fetchAiringTodayTV} />
      </>
      }
    </>
  )
}

export default BrowseContent