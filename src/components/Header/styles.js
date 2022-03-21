import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom';

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? `https://image.tmdb.org/t/p/original${src}` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;
`;

export const Container = styled.div`
    display: flex;
    margin: 0 3.5rem;
    height: 4rem;
    padding: 1.125rem 0;
    justify-content: space-between;
    align-items: center;
    
    a {
        display: flex;
    }
    
    @media (max-width: 1000px) {
        margin: 0 1.875rem;
    }
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;
    
    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;

export const ButtonLink = styled(RouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    
    &:hover {
        background: #f40612;
    }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    margin-right: 1.8rem;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;
    
    &:hover {
        font-weight: bold;
        transition: scale(1.5);
    }
    &:last-of-type {
        margin-right: 0;
    }
`;

export const Picture = styled.button`
    background: url(${({ src }) => src});
    background-size: contain;
    background-repeat: no-repeat;
    border: 0;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
`;


export const Dropdown = styled.div`
    display: none;
    position: absolute;
    background-color: black;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 10px;
    
    ${Group}:last-of-type ${Link} {
        cursor: pointer;
    }
    
    ${Group} {
        margin-bottom: .62rem;
        
        &:last-of-type {
            margin-bottom: 0;
        }
        
        ${Link}, ${Picture} {
            cursor: default;
        }
    }
    
    button {
        margin-right: 10px;
    }
    
    p {
        font-size: .75rem;
        margin-bottom: 0;
        margin-top: 0;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1.25rem;
    position: relative;
    
    button {
        cursor: pointer;
    }
    
    &:hover > ${Dropdown} {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`;

export const Text = styled.p`
    color: white;
    font-size: 1.3rem;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Feature = styled(Container)`
    padding: 9.2rem 0 32rem 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;
    
    @media (max-width: 768px) {
        display: none;
    }
`;

export const FeatureCallOut = styled.h2`
    color: white;
    font-size: 3.2rem;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
`;

export const PlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color: #000;
    border-width: 0;
    padding: .6rem 1.2rem;
    border-radius: 5px;
    max-width: 8rem;
    font-weight: bold;
    font-size: 1.25rem;
    margin-top: .6rem;
    cursor: pointer;
    transition: background-color: 0.5s ease;
    
    &:hover {
        background: #ff1e1e;
        color: white;
    }
`;