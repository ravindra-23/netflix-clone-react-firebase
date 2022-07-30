import React, { useEffect, useState } from 'react'
import { Container, Wrapper, ModalEl, Close, CloseImage, Content, Date, Title, SubTitle, Votes, Poster } from './styles'
import movieTrailer from 'movie-trailer'
import Youtube from 'react-youtube'

const Modal = ({ backdrop_path, title, overview, name, release_date, first_air_date, vote_average, setOpenModal  }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [trailerUrl, setTrailerUrl] = useState('')

  const opts = {
        height : "390",
        width : "100%",
        playerVars : {
            autoplay : 1,
        },
    }

    useEffect(() => {
        if(trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(title || name || "")
            .then(url => {
                const urlParam = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParam.get('v'));
            })
            .catch(error => console.log(error))
        }
    }, [])
  return (
    <Container>
        <Wrapper>
            <ModalEl>
                <Close onClick={() => setOpenModal(false)}>
                    <CloseImage src='../images/icons/close.png' />
                </Close>
                {trailerUrl ? <Youtube opts={opts} videoId={trailerUrl} /> : (<Poster src={`${base_url}${backdrop_path}`} />)}
                <Content>
                    <Date>Release Date: {release_date ? release_date : first_air_date}</Date>
                    <Title>{title ? title : name}</Title>
                    <SubTitle>Plot: {overview}</SubTitle>
                    <Votes>Rating: {vote_average}</Votes>
                </Content>
            </ModalEl>
        </Wrapper>
    </Container>
  )
}

export default Modal