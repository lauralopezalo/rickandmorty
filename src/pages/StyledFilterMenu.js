import styled from "styled-components";

export const FiltersContainer = styled.div`
	max-width: 600px;
	margin: 2rem auto;
`;

export const InputContainer = styled.div`
	position: relative;

	& > svg {
		position: absolute;
		right: 8px;
		top: 50%;
		transform: translateY(-50%);
	}
`;

export const Input = styled.input`
	min-width: 250px;
	width: 100%;
	height: 40px;
	padding: 0.15rem 0.5rem;

	color: var(--mydark);
	line-height: 1.15;

	background-color: var(--mylight);
	border-radius: 0.5rem;
	outline: none;
	box-shadow: var(--btn-shadow);
`;

export const Dropdown = styled.div`
	/* display: ${(props) => (props.$isFilterMenuOpen ? "relative" : "none")}; */
	display: none;

	@media (min-width: 640px) {
		display: block;
	}

	/* dropdown content */
	& > div {
		position: absolute;
		z-index: 100;

		display: ${(props) => (props.$isOpen ? "block" : "none")};
		max-height: 300px;
		padding: 0.15rem 0.5rem;

		color: var(--mydark);
		line-height: 1.15;

		background-color: var(--mylight);
		overflow-y: auto;
		border-radius: 0.5rem;
		box-shadow: var(--btn-shadow);
	}

	ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-width: 250px;
		height: 40px;
		padding: 0.15rem 0.5rem;

		color: var(--mydark);
		line-height: 1.15;

		background-color: var(--mylight);
		border-radius: 0.5rem;
		box-shadow: var(--btn-shadow);
		outline: none;

		cursor: pointer;
	}
`;

export const Li = styled.li`
	padding: 10px;

	list-style-type: none;
	cursor: pointer;

	&:hover {
		background-color: #ddd;
	}
`;

export const MobileDropdown = styled.div`
	/* dropdown content */
	& > div {
		position: absolute;
		z-index: 100;

		display: ${(props) => (props.$isOpen ? "block" : "none")};
		width: 100%;
		max-height: 300px;
		padding: 0.15rem 0.5rem;

		color: var(--mydark);
		line-height: 1.15;

		background-color: var(--mylight);
		overflow-y: auto;
		box-shadow: var(--btn-shadow);
	}

	ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;

		color: var(--mydark);
		line-height: 1.15;

		background-color: var(--mylight);

		box-shadow: var(--btn-shadow);
		outline: none;

		cursor: pointer;
	}
`;
