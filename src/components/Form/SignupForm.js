import React, { useState } from 'react'
import { Container, Title, Error, Base, Input, Submit, Text, Link, TextSmall } from './styles'


const SignupForm = () => {
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState();
    const [user, setUser] = useState({name, emailAddress, password});

    const isInvalid = password === '' || emailAddress === '' || name === '';

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(user)
        console.log(user)
    }

  return (
    <Container>
        <Title>Sign In</Title>
        {error && <Error>{error}</Error>}
        <Base onSubmit={handleSubmit} method='POST'>
            <Input 
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <Input 
                type='email'
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
                Sign Up
            </Submit>

            <Text>
                Already a user? <Link to='/signin'>Sign in now.</Link>
            </Text>

            <TextSmall>
                This page is protected by Google reCAPTCHA.
            </TextSmall>
        </Base>
    </Container>
  )
}

export default SignupForm