import React from 'react'
import OptForm from '../Optform/OptForm'
import { Container, Title, SubTitle } from './styles'

const Feature = () => {
  return (
    <Container>
        <Title>Unlimited films, TV programmes and more.</Title>
        <SubTitle>Watch anywhere. Cancel at any time.</SubTitle>
        <OptForm />
    </Container>
  )
}

export default Feature