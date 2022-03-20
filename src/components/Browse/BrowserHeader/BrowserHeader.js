import React, { useEffect, useState } from 'react'
import { Container, Dropdown, Feature, FeatureCallOut, Group, Link, Logo, Picture, PlayButton, Profile, Text } from '../../Header/styles'
import { Header } from './styles'
import { SearchBar } from '../../index'
import axios from '../../../Axios/axios'
import requests from '../../../Axios/requests'
import { getAuth, signOut } from 'firebase/auth'
import app from '../../../Firebase/firebase'
import { useNavigate } from 'react-router-dom'

const BrowserHeader = ({ isSearch }) => {
    const navigate = useNavigate();
    const auth = getAuth(app);
    const user = auth.currentUser
    const [bannerMovie, setBannerMovie] = useState([])

    const handleSignout = async () => {
        try {
            await signOut(auth)
            navigate('/signin')
        } catch (error) {
            console.error(error);
        }
    }

useEffect(() => {
    const fetchData = async () => {
        const {data}  = await axios.get(requests.fetchNetflixOriginals)
        setBannerMovie(data.results[Math.floor(Math.random() * data.results.length - 1)])
        return data
    }
    fetchData()
    }, [])
  return (
        <Header src={!isSearch && bannerMovie?.backdrop_path} dontShowOnSmallViewPort>
            <Container>
            <Group>
                <Logo to='/home' src='../images/misc/logo.svg' alt='Netflix' />
                <Link onClick={() => navigate('/browse/home')}>Home</Link>
                <Link onClick={() => navigate('/browse/movies')}>Films</Link>
                <Link onClick={() => navigate('/browse/tv')}>Series</Link>
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
                    <Link onClick={handleSignout}>Sign out</Link>
                    </Group>
                </Dropdown>
                </Profile>
            </Group>
            </Container>

            {!isSearch && (
                <Feature>
                    <FeatureCallOut>Watch {bannerMovie.name}</FeatureCallOut>
                    <Text>{bannerMovie.overview}</Text>
                    <PlayButton>Play</PlayButton>
                </Feature>
            )
            }
        </Header>
  )
}

export default BrowserHeader