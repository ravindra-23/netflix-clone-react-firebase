import styled from 'styled-components'

export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({ direction }) => direction};
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 3.125rem 5%;
    color: white;
    overflow: hidden;
`;

export const Container = styled.section`
    background-color: black;
        
    @media (max-width: 1000px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 3.125rem;
        }
    }
`;



export const Pane = styled.div`
    width: 50%;
    
    @media (max-width: 1000px) {
        width: 100%;
        padding: 0 2.8rem;
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-size: 3.125rem;
    line-height: 1.1;
    margin-bottom: 8px;

    @media (max-width: 600px) {
        font-size: 2.18rem;
    }
`;

export const SubTitle = styled.h2`
    font-size: 1.625rem;
    font-weight: normal;
    line-height: normal;

    @media (max-width: 600px) {
        font-size: 1.125rem;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;