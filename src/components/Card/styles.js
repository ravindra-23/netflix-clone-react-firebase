import styled from 'styled-components';

export const Title = styled.p`
    font-size: 24px;
    color: #e5e5e5;
    font-weight: bold;
    margin-left: 56px;
    margin-right: 56px;
    margin-top: 0;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    box-sizing: border-box;
    overflow: hidden;
    
    > ${Title} {
        @media (max-width: 1000px) {
            margin-left: 30px;
        }
    }
    
    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const Group = styled.div`
    margin-bottom: 200px;
    display: flex;
    
    > ${Container}:first-of-type {
        @media (min-width: 1100px) {
            margin-top: -150px;
        }
    }
`;

export const SubTitle = styled.p`
    font-size: 12px;
    color: white;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
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
    min-width: 305px;
    cursor: pointer;
    height: auto;
    padding: 0;
    margin: 0;
    border-radius: 3px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transform: scale(1.3);
        z-index: 99;
    }
    
    @media (min-width: 1000px) {
        &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
            display: block;
            z-index: 100;
        }
    }
    
    &:first-of-type {
        margin-left: 56px;
        
        @media (max-width: 1000px) {
            margin-left: 30px;
        }
    }
    
    &:last-of-type {
        margin-right: 56px;
        
        @media (max-width: 1000px) {
            margin-right: 30px;
        }
    }
`;