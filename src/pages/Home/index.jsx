import React, { useState } from "react";

import { Map } from "../../components/Map";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";

import {
    Container,
    Section,
} from './styles';

export function Home(){

    const [selectedNeighborhood, setSelectedNeighborhood] = useState("Nenhum selecionado");
    const [activeCicly, setActiveCicly] = useState(false);

    return(
        <Container>
            <Header />
            <Section>
                <Map 
                    changeNeighborhood={setSelectedNeighborhood}
                    activeCicly={activeCicly}
                />
                <Menu 
                    neighborhood={selectedNeighborhood}
                    handleActiveCicly={setActiveCicly}
                    activeCicly={activeCicly}
                />
            </Section>
        </Container>
    )
}