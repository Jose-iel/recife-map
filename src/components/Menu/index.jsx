import React from "react";

import Toggle from 'react-toggle';
import 'react-toggle/style.css';

import {
    Container,
    TitleInfo,
    BoxPrincipalInfo,
    PrincipalInfo,
    BoxToggle,
    CicleTitle
} from './styles';

export function Menu({neighborhood, activeCicly, handleActiveCicly}){
    return(
        <Container>
            <BoxPrincipalInfo>
                <TitleInfo>Bairro Selecionado:</TitleInfo>
                <PrincipalInfo>{neighborhood}</PrincipalInfo>
            </BoxPrincipalInfo>

            <BoxToggle>
                <CicleTitle>Ativar vizualização de ciclo via:</CicleTitle>
                <Toggle 
                    onChange={() => handleActiveCicly(!activeCicly)}
                />
            </BoxToggle>
        </Container>
    )
}