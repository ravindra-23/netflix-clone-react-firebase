import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Title, Error, Base, Input, Submit, Text, Link, TextSmall } from './styles'
import app from '../../Firebase/firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const SigninForm = () => {
    const auth = getAuth(app)
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const isInvalid = password === '' || emailAddress === ''

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setError('')
            await signInWithEmailAndPassword(auth, emailAddress, password)
            navigate('/browse/home')
            
        } catch (error) {
            setError('Failed to Login')
        }
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