import React from "react";
import { Link } from "react-router-dom";

import { CardContainer, Description, Title, Characteristic, CharacteristicContainer } from "./TextCard.style";
import { Label } from "../../GlobalStyle";



const OnlyTextCard = ({ id, endpoint, name, type, dimension, air_date, episode }) => {

    const renderCharacteristics = (characteristics) => {
        return Object.entries(characteristics).map(([key, value]) => (
            <div key={key}>
                <Label>{key}</Label>
                <Characteristic>{value}</Characteristic>
            </div>
        ));
    };

    const hasCharacteristics = (type || dimension || episode || air_date);


    return (
        <CardContainer >
            <Link to={`/${endpoint}/${id}`} state={{ id }}>
                <Description>
                    <div>
                        <Title>{name}</Title>
                    </div>
                    {hasCharacteristics && (
                        <CharacteristicContainer>
                            {type && renderCharacteristics(type)}
                            {dimension && renderCharacteristics(dimension)}
                            {episode && renderCharacteristics(episode)}
                            {air_date && renderCharacteristics(air_date)}
                        </CharacteristicContainer>
                    )} 
                </Description>
            </Link>
        </CardContainer>
    )
}


export default OnlyTextCard; 
