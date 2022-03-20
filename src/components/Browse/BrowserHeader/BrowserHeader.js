import React, { useContext, useEffect, useState } from 'react'
import { Container, Dropdown, Feature, FeatureCallOut, Group, Link, Logo, Picture, PlayButton, Profile, Text } from '../../Header/styles'
import { Header } from './styles'
import { SearchBar } from '../../index'
import axios from '../../../Axios/axios'
import requests from '../../../Axios/requests'
import { signOut } from 'firebase/auth'
import { auth } from '../../../Firebase/firebase'
import { useNavigate } from 'react-router-dom'
import Modal from '../../Modal/Modal'
import { UserContext } from '../../../Context/authUser'

const BrowserHeader = ({ isSearch }) => {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    const navigate = useNavigate();
    const [bannerMovie, setBannerMovie] = useState([])
    const [openModal, setOpenModal] = useState(false)

    const handleSignout = async () => {
        try {
            await signOut(auth)
            setCurrentUser(null)
            navigate('/signin')
        } catch (error) {
            console.error(error);
        }
    }

    const handlePlay = () => {
        setOpenModal(true)
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
                    <Link>{currentUser?.displayName}</Link>
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
                    <FeatureCallOut>Watch {bannerMovie?.name}</FeatureCallOut>
                    <Text>{bannerMovie?.overview}</Text>
                    <PlayButton onClick={handlePlay}>Play</PlayButton>
                </Feature>
            )
            }
            {openModal && <Modal {...bannerMovie} setOpenModal={setOpenModal} />}
        </Header>
  )
}

export default BrowserHeader