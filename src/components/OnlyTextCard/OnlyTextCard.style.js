import styled from "styled-components";

export const CardContainer = styled.div`
    width: 600px;
    overflow: hidden;
    border-radius: 20px;
    transition: all 0.2s;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);

    &:hover {
        box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.5);
        transform: translate(-5px, -5px);
    }
`;


export const Description = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h1`
    display: inline;
    text-transform: capitalize;
    font-size: 1.5rem;
    line-height: 1.7rem;
`;

export const CharacteristicContainer = styled.div`
    display: grid;
    grid-template-columns: 45% 55%;
    gap: 1rem;
    margin-top: .5rem
`;


export const Characteristic = styled.p`
    width: 100%;
    text-transform: capitalize;
    font-size: 1.2rem;
`;
