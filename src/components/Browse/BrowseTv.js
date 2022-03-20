import React from 'react'
import { Card } from '../index'
import requests from '../../Axios/requests'

const BrowseTv = () => {
  return (
    <>
        <>
        <Card isLarge title='Netflix Originals' id='NOT' fetchUrl={requests.fetchNetflixOriginalsTV} />
        <Card title='Top Rated' id='TRT' fetchUrl={requests.fetchTopRatedTV} />
        <Card title='Trending TV' id='TT' fetchUrl={requests.fetchTrendingTV} />
        <Card title='Popular' id='PT' fetchUrl={requests.fetchPopularTV} />
        <Card title='Airing Today' id='AT' fetchUrl={requests.fetchAiringTodayTV} />
      </>
    </>
  )
}

export default BrowseTv