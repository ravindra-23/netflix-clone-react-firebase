import React from 'react'
// import { Link } from 'react-router-dom'
import { Container, Frame, Notfound, Error, ErrorText, Link } from './styles'

const PageNotFound = () => {
  return (
    <Container>
      <Frame>
        <Notfound>
          <Error>404</Error>
          <ErrorText>Page not found</ErrorText>
        </Notfound>
        <Link to="/browse/home">Home</Link>
      </Frame>
    </Container>
  )
}

export default PageNotFound