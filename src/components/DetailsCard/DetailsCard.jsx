import React from "react";

import { CardContainer, Image, Description, TitleContainer, Title, CharacteristicConatiner, Characteristic } from "./DetailsCard.style";
import { Label } from "../../GlobalStyle";




const DetailsCard = ({ name, description, image }) => {
    const hasImage = !!image;

    const renderCharacteristics = (characteristics) => {
        return Object.entries(characteristics).map(([key, value]) => (

            <div key={key}>
                <Label>{key}</Label>
                <Characteristic>{value !== "" ? value : "-"}</Characteristic>
            </div>

        ));
    };

    return (
        <CardContainer $hasImage={hasImage}>
            {hasImage &&
                <Image src={image} alt={name} />
            }
            <Description>
                <TitleContainer>
                    <Title>{name}</Title>
                </TitleContainer>
                <CharacteristicConatiner>
                    {description && renderCharacteristics(description)}
                </CharacteristicConatiner>
            </Description>
        </CardContainer>
    )
}



export default DetailsCard;
