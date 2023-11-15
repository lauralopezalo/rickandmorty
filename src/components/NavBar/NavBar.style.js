import styled from "styled-components";

export const NavBarLink = styled.p`
	padding: 1.5rem;

	color: var(--mylight);
	font-size: 1rem;
	font-weight: 400;

	border-color: var(--lime);
	border-bottom-width: 1px;

	&:hover {
		color: var(--lime);
		/* border-color: var(--mygreen); */
        border-bottom-width: 2px;
	}
`;
