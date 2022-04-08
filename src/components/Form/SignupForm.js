import React, {  useState } from 'react'
import { Container, Title, Error, Base, Input, Submit, Text, Link, TextSmall } from './styles'
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import app from '../../Firebase/firebase'
import { useNavigate } from 'react-router-dom';


const SignupForm = () => {
    const auth = getAuth(app)
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const isInvalid = password === '' || emailAddress === '' || name === '' || confirmPassword === '';

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            setError('Password Do Not Match.')
        } else if(password.length < 6) {
            setError('Password should be at least 6 characters')
        } else {

            try {
                setError('');
                await createUserWithEmailAndPassword(auth, emailAddress, password)
                .then(data => updateProfile(auth.currentUser, {
                    displayName: name,
                }))
                .then(() => {
                    setName('')
                    setEmailAddress('')
                    setPassword('')
                    navigate('/browse/home')
                })
                
                
            } catch (error) {
                setError('Failed to create account')
            }

        } 
    }
    console.log(auth.currentUser);


  return (
    <Container>
        <Title>Sign Up</Title>
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

            <Input 
                type='password'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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