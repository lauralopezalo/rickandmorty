import React from "react";

import { CardContainer, Image, ImageContainer, Description, TitleContainer, Title, CharacteristicConatiner, Characteristic } from "./DetailsCard.style";
import { Label } from "../../GlobalStyle";




const DetailsCard = ({ name, description, image }) => {
    const hasImage = !!image;
    console.log("has image=> " + hasImage)

    const renderCharacteristics = (characteristics) => {
        return Object.entries(characteristics).map(([key, value]) => (
            value && (
                <div key={key}>
                    <Label>{key}</Label>
                    <Characteristic>{value}</Characteristic>
                </div>
            )
        ));
    };

    return (
        <CardContainer $hasImage={hasImage}>
            {hasImage &&
                <ImageContainer>
                    <Image src={image} alt={name} />
                </ImageContainer>
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
