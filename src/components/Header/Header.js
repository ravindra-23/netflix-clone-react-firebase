import React from 'react'
import Feature from '../Feature/Feature'
import { Background, Container, Logo, ButtonLink } from './styles'

const Header = () => {
  return (
    <Background bg={true}>
        <Container>
            <Logo src='../images/misc/logo.svg' alt='Netflix'/>
            <ButtonLink>Sign In</ButtonLink>
        </Container>
        <Feature />
    </Background>
  )
}

export default Header