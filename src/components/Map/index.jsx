import React, {useRef, useCallback} from "react";

import DeckGL from '@deck.gl/react';

import {GeoJsonLayer} from '@deck.gl/layers';

import bairros from '../../data/bairros.json';
import ciclovia from '../../data/malhacicloviariapermanente.json';

import {
    BoxMap,
} from './styles';

export function Map({changeNeighborhood, activeCicly}){

    const deckRef = useRef(null);

    const initialView = {
        longitude: -34.944159036934906,
        latitude: -8.04984630501871,
        zoom: 11.5,
        maxZoom: 20,
        pitch: 30,
        bearing: 0
    }

    const layerMap = new GeoJsonLayer({
        id: 'geojson-layer',
        data: bairros,
        extruded: true,
        filled: true,
        getElevation: 30,
        getFillColor: [255,255,0, 120],
        getLineColor: [0,0,0,250],
        getPointRadius: 4,
        getText: f => f.properties.bairro_nome,
        getTextAlignmentBaseline: 'center',
        getTextAnchor: 'middle',
        getTextColor: [25,25,112,300],
        getTextSize: 26,
        lineWidthMinPixels: 2,
        lineWidthScale: 1,
        pointRadiusUnits: 'pixels',
        pointType: 'circle+text',
        stroked: false,
        pickable: true,
    });

    const cicleLayer = new GeoJsonLayer({
        id: 'geojson-layer',
        data: ciclovia,
        getLineColor: [28,28,28,200],
        lineWidthMinPixels: 1,
    });

    const handlePickPositionOnMap = useCallback(event => {
        const pickInfo = deckRef.current.pickObject({
          x: event.clientX,
          y: event.clientY,
          radius: 1
        });
        if(pickInfo === null) {
            changeNeighborhood("Nenhum selecionado");
            return;
        };
        changeNeighborhood(pickInfo.object.properties.bairro_nome)
    }, [changeNeighborhood])

    return(
        <BoxMap onClick={handlePickPositionOnMap}>
            <DeckGL 
                initialViewState={initialView}
                controller={true}
                layers={ activeCicly ? [cicleLayer, layerMap] : [layerMap] }
                getTooltip={({object}) => object && `${object.properties.bairro_nome}`}
                ref={deckRef}
                width={'75%'}
            />
        </BoxMap>
    )
}