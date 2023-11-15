import React from "react";

import { CardContainer, Image, CardHeading, CharacteristicConatiner, Characteristic } from "./DetailsCard.style";
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
			{hasImage && <Image src={image} alt={name} />}
			<div>
				<div className="flex items-center">
					<CardHeading>{name}</CardHeading>
				</div>
				<CharacteristicConatiner>{description && renderCharacteristics(description)}</CharacteristicConatiner>
			</div>
		</CardContainer>
	);
};

export default DetailsCard;
