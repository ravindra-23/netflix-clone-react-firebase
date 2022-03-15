import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
    display: flex;
    padding: 4.3rem 2.8rem;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`;

export const Title = styled.h1`
    font-size: 3.125rem;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: .5rem;
    color: white;
    text-align: center;
    
    @media (max-width: 600px) {
        font-size: 2rem;
    }
`;

export const Frame = styled.div`
    margin-bottom: .62rem;
    max-width: 1200px;
`;

export const Item = styled.div`
    color: white;
    margin-bottom: .62rem;
    
    &:first-of-type {
        margin-top: 3rem;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    box-sizing: border-box;
    margin-bottom: 1px;
    font-size: 1.625rem;
    font-weight: normal;
    background: #303030;
    padding: 0.8em 1.2em 0.8em 1.2em;
    user-select: none;
    align-items: center;
    width: 100%;
    
    img {
        filter: brightness(0) invert(1);
        width: 1.5rem;
        
        @media (max-width: 600px) {
            width: 1rem;
        }
    }
    
    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export const Body = styled.div`
    box-sizing: border-box;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    font-size: 1.625rem;
    font-weight: normal;
    line-height: normal;
    background: #303030;
    padding: 0.8em 1.2em 0.8em 1.2em;
    user-select: none;
    align-items: center;
    width: 100%;
    
    @media (max-width: 600px) {
        font-size: 1rem;
        line-height: 1.3rem;
    }
`;