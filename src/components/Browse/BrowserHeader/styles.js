import styled from 'styled-components'

export const Header = styled.section`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? `https://image.tmdb.org/t/p/original${src}` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;
    
    @media (max-width: 768px) {
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
    }
`;