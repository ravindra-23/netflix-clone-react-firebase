import React from 'react'
import { Header, Info, Accordion, Footer, Feature } from '../components'
import { Container, Link, Logo, ButtonLink } from '../components/Header/styles'

const Home = () => {
  return (
    <>
        <Header bg={true}>
          <Container>
            <Link to='/'>
              <Logo src='../images/misc/logo.svg' alt='Netflix'/>
            </Link>
            <ButtonLink to='/signin'>Sign In</ButtonLink>
          </Container>
          <Feature />
        </Header>
        <Info />
        <Accordion />
        <Footer />
    </>
  )
}

export default Home