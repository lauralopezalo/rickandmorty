import styled from "styled-components";

export const CardContainer = styled.div`
    width: 600px; 

    background-color: var(--mylight);
    overflow: hidden;
    border-radius: 20px;
    transition: all 0.2s;
    box-shadow: var(--main-shadow);

    &:hover {
        box-shadow: var(--hover-shadow);
        transform: translate(-5px, -5px);
    }
    @media (max-width: 411px) {
        width: 100%;
    }
`;


export const Description = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
`;


export const Title = styled.h1`
    font-size: 1.5rem;
    line-height: 1.7rem;
    text-transform: capitalize;
`;

export const CharacteristicContainer = styled.div`
    display: grid;
    grid-template-columns: 45% 55%;
    gap: 1rem;

    margin-top: .5rem;
`;


export const Characteristic = styled.p`
    width: 100%;
    font-size: 1.2rem;
    text-transform: capitalize;
`;
