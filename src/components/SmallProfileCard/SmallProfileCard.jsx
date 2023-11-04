import React from "react";
import { Link } from "react-router-dom";

import { CardContainer, Image, Title } from "./SmallProfileCard.style";




const SmallProfileCard = ({ id, name, image }) => {
    return (
        <CardContainer className="bg-mywhite">
            <Link to={`/character/${id}`} state={{ id }}>
                <Image src={image} alt={name} />
                    <Title>{name}</Title>
            </Link>
        </CardContainer>
    )
}



export default SmallProfileCard;
