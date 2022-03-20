import React from 'react';
import { Card } from '../index';
import requests from '../../Axios/requests';
import { useParams } from 'react-router-dom';

const BrowseContent = () => {
  const { param } = useParams();
  
  return (
    <>
      {param === "home" && (
          <>
          <Card isLarge title='Netflix Originals' id='NOT' fetchUrl={requests.fetchNetflixOriginalsTV} />
          <Card  title='Top Rated' id='TR' fetchUrl={requests.fetchTopRated} />
          <Card  title='Action' id='AM' fetchUrl={requests.fetchActionMovies} />
          <Card  title='Trending TV' id='TT' fetchUrl={requests.fetchTrendingTV} />
        </>
      )}

      {param === "movies" && (
        <>
          <Card isLarge title='Top Rated' id='TR' fetchUrl={requests.fetchTopRated} />
          <Card title='Action' id='AM' fetchUrl={requests.fetchActionMovies} />
          <Card title='Trending' id='TN' fetchUrl={requests.fetchTrending} />
          <Card title='Romantic' id='RM' fetchUrl={requests.fetchRomanceMovies} />
          <Card title='Comedy' id='CM' fetchUrl={requests.fetchComedyMovies} />
          <Card title='Horror' id='HM' fetchUrl={requests.fetchHorrorMovies} />
          <Card title='Documentries' id='DM' fetchUrl={requests.fetchDocumentaries} />
        </>
      )}

      {param === "tv" && (
        <>
          <Card isLarge title='Netflix Originals' id='NOT' fetchUrl={requests.fetchNetflixOriginalsTV} />
          <Card title='Top Rated' id='TRT' fetchUrl={requests.fetchTopRatedTV} />
          <Card title='Trending TV' id='TT' fetchUrl={requests.fetchTrendingTV} />
          <Card title='Popular' id='PT' fetchUrl={requests.fetchPopularTV} />
          <Card title='Airing Today' id='AT' fetchUrl={requests.fetchAiringTodayTV} />
        </>
      )}
      
    </>
  )
}

export default BrowseContent

