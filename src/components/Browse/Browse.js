import React from 'react'
import { Card } from '../index'
import requests from '../../Axios/requests'

const BrowseContent = () => {
  
  return (
    <>
        <Card isLarge title='Netflix Originals' id='NOT' fetchUrl={requests.fetchNetflixOriginalsTV} />
        <Card  title='Top Rated' id='TR' fetchUrl={requests.fetchTopRated} />
        <Card  title='Action' id='AM' fetchUrl={requests.fetchActionMovies} />
        <Card  title='Trending TV' id='TT' fetchUrl={requests.fetchTrendingTV} />
    </>
  )
}

export default BrowseContent