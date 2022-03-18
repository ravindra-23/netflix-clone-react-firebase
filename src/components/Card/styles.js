import styled from 'styled-components';

export const Title = styled.p`
    font-size: 1.5rem;
    color: #e5e5e5;
    font-weight: bold;
    margin-inline: 3.5rem;
    margin-top: 0;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3.2rem;
    box-sizing: border-box;
    overflow: hidden;

    > ${Title} {
        @media (max-width: 1000px) {
            margin-left: 1.8rem;
        }
    }
    
    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const Group = styled.div`
    margin-bottom: 12rem;
    display: flex;
    &:last-of-type {
        margin-bottom: 0;
    }
    
    > ${Container}:first-of-type {
        @media (min-width: 769px) {
            margin-top: -9.5rem;
        }
    }

    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

export const SubTitle = styled.p`
    font-size: .75rem;
    color: white;
    font-weight: bold;
    margin-block: 0;
    user-select: none;
    display: none;
`;

export const Text = styled.p`
    margin-top: 5px;
    font-size: 10px;
    color: white;
    margin-bottom: 0;
    user-select: none;
    display: none;
    line-height: normal;
`;

export const Entities = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    overflow-x: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Meta = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    padding: 10px;
    background-color: #0000008f;
`;

export const Image = styled.img`
    border: 0;
    width: 100%;
    min-width: 19rem;
    cursor: pointer;
    height: auto;
    padding: 0;
    margin: 0;
    border-radius: 3px;

    @media (max-width: 768px) {
        min-width: 10rem;
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transform: scale(1.1);
        z-index: 99;
    }
    
    @media (min-width: 1000px) {
        &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
            display: block;
            z-index: 100;
        }
    }
    
    &:first-of-type {
        margin-left: 3.5rem;
        
        @media (max-width: 1000px) {
            margin-left: 1.8rem;
        }
    }
    
    &:last-of-type {
        margin-right: 1.5rem;
        
        @media (max-width: 1000px) {
            margin-right: 1.8rem;
        }
    }
`;

export const ArrowLeft = styled.div`
    background-clip: content-box;
    padding: 1.2rem 0;
    box-sizing: border-box;
    transition: 400ms all ease-in-out;
    cursor: pointer;
    width: 5rem;
    z-index: 1000;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;

    &:hover {
        transition: 400ms all ease-in-out;
        opacity: 1;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Span = styled.span`
    transition: 400ms all ease-in-out;

    &:hover {
        transition: 400ms all ease-in-out;
        visibility: visible;
        transform: scale(1.5);
    }
`;

export const ArrowImage = styled.img`
    width: 30px;
    height: 30px;
`;

export const ArrowRight = styled.div`
    background-clip: content-box;
    padding: 1.2rem 0;
    box-sizing: border-box;
    transition: 400ms all ease-in-out;
    cursor: pointer;
    width: 5rem;
    z-index: 1000;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;

    &:hover {
        transition: 400ms all ease-in-out;
        opacity: 1;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const RowSlider = styled.div`
    position: relative;
`