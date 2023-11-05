import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AliveIcon, DeadIcon, FemaleIcon, GenderUnknownIcon, GenderlessIcon, MaleIcon, StatusUnknownIcon } from "../../../public/icons";

import { CardContainer, Image, Description, TitleContainer, Title, CharacteristicConatiner, Characteristic, IconsContainer } from "./ProfileCard.style";
import { Label } from "../../GlobalStyle";




const ProfileCard = ({ id, name, status, location, image, gender }) => {

    const hasCharacteristics = (status || location || gender);

    return (
        <CardContainer $bigSize={hasCharacteristics}>
            <Link to={`/character/${id}`} state={{ id }}>
                <Image src={image} alt={name} />
                <Description>
                    <TitleContainer>
                        <Title>{name}</Title>
                    </TitleContainer>
                    {hasCharacteristics && (
                        <CharacteristicConatiner>
                            <Label className="text-stone-400">Last known location</Label>
                            <Characteristic>{location}</Characteristic>
                        </CharacteristicConatiner>)}
                </Description>
                {hasCharacteristics && (<IconsContainer>
                    {gender === "Female" ? (<FemaleIcon />) : gender === "Male" ? (<MaleIcon />) : gender === "Genderless" ? (<GenderlessIcon />) : (<GenderUnknownIcon />)}
                    {status === "Alive" ? (<AliveIcon />) : status === "Dead" ? (<DeadIcon />) : (<StatusUnknownIcon />)}
                </IconsContainer>)}
            </Link>
        </CardContainer>
    )
}



export default ProfileCard;
