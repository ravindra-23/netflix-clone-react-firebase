import React from 'react'
import { Background } from './styles'

const Header = ({ children, bg, src }) => {
  console.log(src)
  return (
    <Background bg={bg} src={src} dontShowOnSmallViewPort>
        {children}
    </Background>
  )
}

export default Header