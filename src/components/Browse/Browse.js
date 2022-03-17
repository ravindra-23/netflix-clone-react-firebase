import React, { useEffect, useState } from 'react'
import { Header, SearchBar, Card } from '../index'
import app from '../../Firebase/firebase'
import { getAuth } from 'firebase/auth'
import { Container, Dropdown, Feature, FeatureCallOut, Group, Link, Logo, Picture, PlayButton, Profile, Text } from '../Header/styles'
import axios from '../../Axios/axios'
import requests from '../../Axios/requests'

const BrowseContent = () => {
  const auth = getAuth(app);
  const user = auth.currentUser
  const [bannerMovie, setBannerMovie] = useState([])
  

  useEffect(() => {
    const fetchData = async () => {
      const {data}  = await axios.get(requests.fetchNetflixOriginals)
      setBannerMovie(data.results[Math.floor(Math.random() * data.results.length - 1)])
      return data
    }
    fetchData()
  }, [])
 
  return (
    <>
      <Header src={bannerMovie.backdrop_path} dontShowOnSmallViewPort bg={false}>
        <Container>
          <Group>
            <Logo to='/home' src='../images/misc/logo.svg' alt='Netflix' />
            <Link>Films</Link>
            <Link>Tv Shows</Link>
          </Group>

          <Group>
            <SearchBar />
            <Profile>
              <Picture src='../images/users/1.png' />
              <Dropdown>
                <Group>
                  <Picture src='../images/users/1.png' />
                  {/* <Link>{user.displayName}</Link> */}
                </Group>
                <Group>
                  <Link>Sign out</Link>
                </Group>
              </Dropdown>
            </Profile>
          </Group>
        </Container>

        <Feature>
          <FeatureCallOut>Watch {bannerMovie.name}</FeatureCallOut>
          <Text>{bannerMovie.overview}</Text>
          <PlayButton>Play</PlayButton>
        </Feature>
      </Header>

      <Card title='Top Rated' id='TR' fetchUrl={requests.fetchTopRated} />
      <Card title='Action' id='AM' fetchUrl={requests.fetchActionMovies} />
      <Card title='Trending' id='TN' fetchUrl={requests.fetchTrending} />
      <Card title='Romantic' id='RM' fetchUrl={requests.fetchRomanceMovies} />
      <Card title='Comedy' id='CM' fetchUrl={requests.fetchComedyMovies} />
      <Card title='Horror' id='HM' fetchUrl={requests.fetchHorrorMovies} />
      <Card title='Documentries' id='DM' fetchUrl={requests.fetchDocumentaries} />
    
    </>
  )
}

export default BrowseContent