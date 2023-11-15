import styled from "styled-components";

export const CardContainer = styled.div`
	position: relative;
    display: grid;
	grid-template-columns: 1fr 1fr;
	
	max-width: 900px;
	margin: 4rem auto;

	background-color: var(--mylight);
	overflow: hidden;
	border-radius: 20px;
	box-shadow: var(--main-shadow);

    & > div {
        grid-column: ${(props) => (props.$hasImage ? "" : "span 2 / span 2")};
        display: grid;
        grid-template-rows: 2fr 3fr;
        padding: 3rem;
    }

	@media (max-width: 768px) {
		display: block;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;


export const CardHeading = styled.h1`
	font-size: 3rem;
	line-height: 3rem;
	text-transform: capitalize;

`;

export const CharacteristicConatiner = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

export const Characteristic = styled.p`
	width: 100%;

	font-size: 1.2rem;
	line-height: 1.4rem;
	text-transform: capitalize;
`;


