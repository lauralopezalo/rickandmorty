import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {

  --myblack: #0D0D0D;
  --mywhite: #f9faf7;
  --lime: #A7CB54;
  --mygreen: #5CAD4A;
  --myyellow: #F0EC54;
  
  --main-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  --hoover-shadow: 5px 5px 25px rgba(0, 0, 0, 0.5);
  --btn-shadow: 0px 10px 20px -18px;
}

	body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Condensed', sans-serif;
  background-color: var(--myyellow);
  background-image: linear-gradient(to bottom right, #A7CB54, rgba(167, 203, 84, 0.4));
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
  border-bottom: 2px solid var(--lime);
}

input:hover, select:hover {
  outline: 1px solid var(--lime);
}


button {
  height: 50px;
  width: 150px;
  background-color: var(--myblack);
  color: var(--mywhite);
  font-weight: 700;
  padding: .15rem .5rem;
  margin: 1rem auto;
  height: 40px;
  border: 1px solid var(--lime);
  border-radius: 2rem;
  outline: none;
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
  font-weight: 600;
  line-height: 1.1rem;
  color: var(--lime);
  margin-top: 1rem;
`;

export const FiltersContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-rows: auto auto;
  justify-content: center;
  margin: 2rem 0;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 600px;

  select{
    width: 49%;
  }
`;
