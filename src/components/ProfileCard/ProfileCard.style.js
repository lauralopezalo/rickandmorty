import styled from "styled-components";

export const CardContainer = styled.div`
	position: relative;

	width: ${(props) => (props.$bigSize ? "260px" : "200px")};

	background-color: var(--mylight);
	border-radius: 20px;
	box-shadow: var(--main-shadow);
	overflow: hidden;
	transition: all 0.2s;

	&:hover {
		box-shadow: var(--hover-shadow);
		transform: translate(-5px, -5px);
	}

	@media (max-width: 450px) {
		width: 100%;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 220px;
	object-fit: cover;
`;

export const Description = styled.div`
	padding: 1.6rem;
`;

export const Title = styled.h1`
	font-size: ${(props) => (props.$bigSize ? "1.4rem" : "1.2rem")};
	line-height: ${(props) => (props.$bigSize ? "1.6rem" : "1.3rem")};
	text-transform: capitalize;
`;

export const CharacteristicConatiner = styled.div`
	width: 75%;
`;

export const Characteristic = styled.p`
	width: 100%;
	font-size: 1.2rem;
	line-height: 1.4rem;
	text-transform: capitalize;
`;

export const IconsContainer = styled.div`
	position: absolute;
	right: 1.2rem;
	bottom: 0.7rem;

	display: flex;
	justify-content: end;
	gap: 5px;
`;

export const Svg = styled.svg`
	width: 2rem;
	height: 2rem;
	stroke: var(--lightgray);
	transition: stroke 300ms ease-in-out;

	${CardContainer}:hover & {
		stroke: var(--lime);
	}
`;
