import React, { useEffect, useState } from 'react'
import { Container, Dropdown, Feature, FeatureCallOut, Group, Link, Logo, Picture, PlayButton, Profile, Text } from '../../Header/styles'
import { Header } from './styles'
import { SearchBar } from '../../index'
import axios from '../../../Axios/axios'
import requests from '../../../Axios/requests'
import { getAuth } from 'firebase/auth'
import app from '../../../Firebase/firebase'

const BrowserHeader = ({ handleMovies, handleTv, handleHome }) => {
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
        <Header src={bannerMovie.backdrop_path} dontShowOnSmallViewPort>
            <Container>
            <Group>
                <Logo to='/home' src='../images/misc/logo.svg' alt='Netflix' />
                <Link onClick={handleHome}>Home</Link>
                <Link onClick={handleMovies}>Films</Link>
                <Link onClick={handleTv}>Series</Link>
            </Group>

            <Group>
                <SearchBar />
                <Profile>
                <Picture src='../images/users/1.png' />
                <Dropdown>
                    <Group>
                    <Picture src='../images/users/1.png' />
                    <Link>{user.displayName}</Link>
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
  )
}

export default BrowserHeader