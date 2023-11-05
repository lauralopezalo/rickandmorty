import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {

  --myblack: #0D0D0D;
  --mywhite: #f9faf7;
  --lime: #A7CB54;
  --green1: #5CAD4A;
  --green2: #208D45;
  --main-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  --hoover-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  --btn-shadow: 0px 10px 20px -18px;
}

	body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Condensed', sans-serif;
  }

  input, select {
  min-width: 250px;
  background-color: var(--mywhite);
  color: var(--myblack);
  padding: .15rem .5rem;
  height: 40px;
  border-radius: .5rem;
  outline: none;
  border: none;
  line-height: 1.15;
  box-shadow: var(--btn-shadow);
}


input:focus, select:focus {
  border-bottom: 2px solid #5b5fc7;
  border-radius: 4px 4px 2px 2px;
}

input:hover, select:hover {
  outline: 1px solid lightgrey;
}


button {
  height: 50px;
  width: 200px;
  background-color: var(--lime);
  color: var(--mywhite);
  padding: .15rem .5rem;
  height: 40px;
  border-radius: .5rem;
  outline: none;
  border: none;
  line-height: 1.15;
  box-shadow: var(--btn-shadow);
}

button:hover {
  background-color: var(--mywhite);
  color: var(--lime);
  transition: all 0.2s ease-in
}


`;

export const Label = styled.p`
  width: 100%;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 500;
`;

export const FiltersContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-rows: auto auto;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
