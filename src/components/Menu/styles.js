import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 5rem;
    width: 25%;
    height: 91.8%;
    background-color: ${({theme}) => theme.colors.primary};
    position: absolute;
    right: 0;
    border-left-width: 2px;
    border-left-style: solid;
    border-left-color: ${({theme}) => theme.colors.secondary};
`;

export const TitleInfo = styled.h2``;

export const BoxPrincipalInfo = styled.div`
    margin-top: 2.18rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.25rem;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.colors.secondary};
`;

export const PrincipalInfo = styled.h2`
    margin-bottom: 2.18rem;
    color: ${({theme}) => theme.colors.secondary};
`;

export const CicleTitle = styled.p`
    font-size: 18px;
    color: ${({theme}) => theme.colors.dark300};
`;

export const BoxToggle = styled.div`
    margin-top: 1.87rem;
    margin-left: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.625rem;
`;