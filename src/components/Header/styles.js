import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 5rem;
    background-color: ${({theme}) => theme.colors.primary};
    position: absolute;
    z-index: 99;
    align-items: center;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.colors.secondary};
`;

export const Logo = styled.img`
    margin-left: 1.25rem;
`;

export const Title = styled.h1`
    margin-left: 5.62rem;
    color: ${({theme}) => theme.colors.dark700}
`;