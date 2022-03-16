import React, { useState } from 'react'
import { Container, Title, Error, Base, Input, Submit, Text, Link, TextSmall } from './styles'

const SigninForm = () => {
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const isInvalid = password === '' || emailAddress === ''

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailAddress, password)
    }
  return (
    <Container>
        <Title>Sign In</Title>
        {error && <Error>{error}</Error>}
        <Base onSubmit={handleSubmit} method='POST'>
            <Input 
                placeholder='Email'
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
            />

            <Input 
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Submit type='submit' disabled={isInvalid}>
                Sign in
            </Submit>

            <Text>
                New to Netflix? <Link to='/signup'>Sign up now.</Link>
            </Text>

            <TextSmall>
                This page is protected by Google reCAPTCHA.
            </TextSmall>
        </Base>
    </Container>
  )
}

export default SigninForm