import React from "react";

import LogoPrefeitura from '../../assets/logopcr.png';

import {
    Container,
    Logo,
    Title
} from './styles';

export function Header(){
    return(
        <Container>
            <Logo src={LogoPrefeitura} alt="Logo"/>
            <Title>Projeto de vizualização de bairros e malha ciclo viária de Recife</Title>
        </Container>
    )
}