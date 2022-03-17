import React, { useEffect, useState } from 'react'
import { Container, Group, Title, SubTitle, Text, Meta, Entities, Item, Image } from './styles'
import axios from '../../Axios/axios'
import { Modal } from '../index'

const Card = ({ title, id, fetchUrl }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState({})
  console.log(selectedMovie)

  const handleClick = (movie) => {
      setOpenModal(true);
      setSelectedMovie(movie);
  }

    useEffect(() => {
        const fetchTopRated = async () => {
          const { data } = await axios.get(fetchUrl)
          setMovies(data.results)
          return data
        }
    
        fetchTopRated();
      }, [fetchUrl])
      console.log(movies);
  return (
      <Group>
        <Container>
            <Title>{title}</Title>
            <Entities>
                {movies?.map(movie => (
                    <Item onClick={() => handleClick(movie)}>
                        <Image src={`${base_url}${movie.backdrop_path}`} />
                        <Meta>
                            <SubTitle>{movie.title}</SubTitle>
                            <Text>{movie.overview}</Text>
                        </Meta>
                    </Item>
                ))}
            </Entities>
            {openModal && <Modal {...selectedMovie} setOpenModal={setOpenModal} />}
        </Container>
    </Group>
  )
}

export default Card