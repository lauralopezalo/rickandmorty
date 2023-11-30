import styled from "styled-components";

export const ImageContainer = styled.div`
	height: 100%;

	background-image: url("/img-background1.avif");
	background-size: cover;
	background-position: top;
	background-repeat: no-repeat;
`;

export const GradientContainer = styled.div`
	height: 100%;
	padding: 2rem;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	text-align: center;

	background: rgb(0, 0, 0);
	background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.96) 30%, rgba(0, 0, 0, 0) 65%);

	@media (min-width: 768px) {
		padding: 4rem;

		text-align: left;
		justify-content: center;

		background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.96) 40%, rgba(0, 0, 0, 0) 60%);
	}
`;
