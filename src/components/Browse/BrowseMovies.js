import React from 'react'
import { Card } from '../index'
import requests from '../../Axios/requests'

const BrowseMovies = () => {
  return (
    <>
        <Card isLarge title='Top Rated' id='TR' fetchUrl={requests.fetchTopRated} />
        <Card title='Action' id='AM' fetchUrl={requests.fetchActionMovies} />
        <Card title='Trending' id='TN' fetchUrl={requests.fetchTrending} />
        <Card title='Romantic' id='RM' fetchUrl={requests.fetchRomanceMovies} />
        <Card title='Comedy' id='CM' fetchUrl={requests.fetchComedyMovies} />
        <Card title='Horror' id='HM' fetchUrl={requests.fetchHorrorMovies} />
        <Card title='Documentries' id='DM' fetchUrl={requests.fetchDocumentaries} />
    </>
  )
}

export default BrowseMovies