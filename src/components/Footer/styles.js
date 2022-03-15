import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    max-width: 1000px;
    flex-direction: column;
    padding: 4.3rem 3.5rem;
    margin: auto;

    @media (max-width: 1000px) {
        padding: 4.3rem 1.8rem;
    }
`;

export const Title = styled.p`
    font-size: 1rem;
    color: #757575;
    margin-bottom: 2.5rem;
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 15px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Link = styled.a`
    color: #757575;
    margin-bottom: 1.25rem;
    font-size: .8rem;
    text-decoration: none;
`;

export const Text = styled.p`
    font-size: .8rem;
    color: #757575;
    margin-bottom: 2.5rem;
`