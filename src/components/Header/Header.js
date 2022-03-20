import React from 'react'
import { Background, Container, Logo, ButtonLink } from './styles'
import { Link } from 'react-router-dom'

const Header = ({ children, bg, src }) => {
  console.log(src)
  return (
    <Background bg={bg} src={src} dontShowOnSmallViewPort>
          <Container>
            <Link to='/'>
              <Logo src='../images/misc/logo.svg' alt='Netflix'/>
            </Link>
            <ButtonLink to='/signin'>Sign In</ButtonLink>
          </Container>
        {children}
    </Background>
  )
}

export default Header