import React from 'react'
import { Container, Input, Button, Break, Text } from './styles'

const OptForm = () => {
  return (
    <Container>
        <Input placeholder='Email Address' />
        <Button>Try it now.</Button>
        <Break />
        <Text>Ready to watch? Enter your email to create or restart your membership.</Text>
    </Container>
  )
}

export default OptForm