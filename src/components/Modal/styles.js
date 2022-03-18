import styled from 'styled-components'

export const Container = styled.div`
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
`;

export const Wrapper = styled.div`
    z-index: -1;
    position: fixed;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.2);
    -webkit-tap-highlight-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalEl = styled.div`
    position: relative;
    width: auto;
    height: auto;
    max-width: 1000px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
    background: #111;
    overflow: hidden;
    border-radius: 8px;
    transition: all 400ms ease-in-out 2s;
    animation: fadeIn 400ms;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
        visibility: hidden;
    }
`;

export const Close = styled.span`
    position: absolute;
    right: 1.2rem;
    top: 1.2rem;
    cursor: pointer;
    z-index: 1000;
`;

export const CloseImage = styled.img`
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    border: none;
`

export const Content = styled.div`
    color: #fff;
    padding: 2.5rem;
`;

export const Date = styled.p`
    font-weight: 600;
    font-size: 1.2rem;
`;

export const Title = styled.h2`
    padding: 0;
    font-size: 2.5rem;
    margin: 1rem 0;
`;

export const SubTitle = styled.h2`
    font-size: 1.2rem;
    line-height: 1.5;
`;

export const Votes = styled.h2`
    font-size: 1.2rem;
    line-height: 1.5;
`;

export const Poster = styled.img`
    width: 100%;
    height: auto;
`



