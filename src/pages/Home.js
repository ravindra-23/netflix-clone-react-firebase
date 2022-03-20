import React from 'react'
import { Header, Info, Accordion, Footer, Feature } from '../components'

const Home = () => {
  return (
    <>
        <Header bg={true}>
          <Feature />
        </Header>
        <Info />
        <Accordion />
        <Footer />
    </>
  )
}

export default Home