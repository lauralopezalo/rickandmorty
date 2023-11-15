import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {

  --mydark: #0D0D0D;
  --mylight: #f9faf7;
  --lime: #ABFE00;
  --mygreen: #39A200;
  --myyellow: #F0EC54;
  --lightgray: #DBD6D0;
  
  --main-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  --hover-shadow: 5px 5px 25px rgba(0, 0, 0, 0.5);
  --btn-shadow: 0px 10px 20px -18px;
}


/* Style Scrollbars for WebKit-based browsers (Chrome, Safari) */
::-webkit-scrollbar {
  width: 12px; 
}
::-webkit-scrollbar-thumb {
  background-color: #888; 
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

/* Style Scrollbars for Blink-based browsers (Opera) */
::-webkit-scrollbar-track {
  background-color: #f1f1f1; 
}
::-webkit-scrollbar-track:hover {
  background-color: #e9e9e9; 
}


body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  
  background-color: var(--myyellow);
  background-image: linear-gradient(to bottom right, var(--lime), rgba(167, 203, 84, 0.4));
}

`;

export const Heading = styled.h1`
	margin-top: 0.5rem;
	margin-bottom: 0.25rem;

	font-size: 2rem;
	font-weight: 900;
	text-align: center;

	@media (min-width: 576px) {
		margin-top: 1rem;
		margin-bottom: 0.75rem;

		font-size: 3.5rem;
	}
`;

export const Button = styled.button`
	height: 40px;
	padding: 0.15rem 0.5rem;

	color: var(--mylight);
	line-height: 1.15;

	background-color: var(--mydark);
	border-radius: 0.5rem;
	box-shadow: var(--btn-shadow);
`;

export const Label = styled.p`
	width: 100%;
	margin-top: 1rem;

	color: var(--lime);
	font-size: 0.9rem;
	font-weight: 600;
	line-height: 1.1rem;
	text-transform: uppercase;
`;

