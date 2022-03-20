import styled from 'styled-components'

export const Header = styled.section`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src && `https://image.tmdb.org/t/p/original${src}`)}) top left / cover no-repeat;
    
    @media (max-width: 768px) {
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
        margin-bottom: 2rem;
    }
`;