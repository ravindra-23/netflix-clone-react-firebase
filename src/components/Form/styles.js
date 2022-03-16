import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 41rem;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    max-width: 28rem;
    padding: 3.75rem 4.25rem 2.5rem;
    margin-bottom: 6.25rem;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.75rem;
`;

export const Error = styled.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: .8rem;
    margin: 0 0 1rem;
    color: white;
    padding: 1rem 1.2rem;
`;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 28rem;
    width: 100%;
`;

export const Input = styled.input`
    background: #333;
    border-radius: 4px;
    border: 0;
    color: #fff;
    height: 3rem;
    line-height: 3rem;
    padding: .3rem 1.25rem;
    margin-bottom: 1.25rem;
    
    &:last-of-type {
        margin-bottom: 1.8rem;
    }
`;

export const Submit = styled.button`
    background: #e50914;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    margin: 0 0 .75rem;
    padding: 1rem;
    border: 0;
    color: white;
    cursor: pointer;
    
    &:disabled {
        opacity: 0.5;
    }
`;

export const Text = styled.h1`
    color: #737373;
    font-size: 1rem;
    font-weight: 500;
`;

export const Link = styled(RouterLink)`
    color: #fff;
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
`;

export const TextSmall = styled.h2`
    margin-top: .62rem;
    font-size: .8rem;
    line-height: normal;
    color: #8c8c8c;
`;