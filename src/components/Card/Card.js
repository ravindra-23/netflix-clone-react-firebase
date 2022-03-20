import React, { useEffect, useState } from 'react'
import { Container, Group, Title, SubTitle, Text, Meta, Entities, Item, Image, ArrowLeft, ArrowImage, Span, ArrowRight, RowSlider } from './styles'
import axios from '../../Axios/axios'
import { Modal } from '../index'

const Card = ({ title, id, fetchUrl, isLarge, isSearch, SearchResult }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState({})

  const handleClick = (movie) => {
      setOpenModal(true);
      setSelectedMovie(movie);
  }

    useEffect(() => {
        const fetchMovies = async () => {
          const { data } = await axios.get(fetchUrl)
          setMovies(data.results)
          return data
        }
        if (!isSearch) {
          fetchMovies();
        } else {
          setMovies(SearchResult);
        }
      }, [fetchUrl, isSearch, isLarge, SearchResult])

  return (
      <Group>
        <Container>
            <Title>{title}</Title>
            <RowSlider>
              <ArrowLeft><Span onClick={() => {document.getElementById(id).scrollLeft-=(window.innerWidth-80)}}><ArrowImage src='../images/icons/left-arrow.png' /></Span></ArrowLeft>
              <Entities id={id}>
                  {movies?.map(movie => (
                      <Item onClick={() => handleClick(movie)} key={movie?.id}>
                          <Image src={`${base_url}${ isLarge ? movie?.poster_path : movie.backdrop_path}`} />
                          <Meta>
                              <SubTitle>{movie.title ? movie.title: movie.name}</SubTitle>
                              <Text>{movie.overview.slice(0, 350)}</Text>
                          </Meta>
                      </Item>
                  ))}
              </Entities>
              <ArrowRight><Span onClick={()=>{document.getElementById(id).scrollLeft+=(window.innerWidth-80)}}><ArrowImage src='../images/icons/right-arrow.png' /></Span></ArrowRight>
            </RowSlider>
            {openModal && <Modal {...selectedMovie} setOpenModal={setOpenModal} />}
        </Container>
    </Group>
  )
}

export default Card