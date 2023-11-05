import styled from "styled-components";

export const CardContainer = styled.div`
    max-width: 900px;
    margin: 4rem auto;
    position: relative;
    overflow: hidden;
    display: flex;
    border-radius: 20px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    background-color: var(--mywhite);
`;

export const ImageContainer = styled.div`
    width: 50%;
    object-fit: cover;
`;

export const Image = styled.img`
    height: auto;
    width: 100%;
    object-fit: cover;
`;

export const Description = styled.div`
    padding: 3rem;
`;

export const TitleContainer = styled.div`
    margin-bottom: 2rem;
`;


export const Title = styled.h1`
    font-size: 3rem;
    line-height: 2.2rem;
    text-transform: capitalize;
`;

export const CharacteristicConatiner = styled.div`
`;

export const Characteristic = styled.p`
    width: 100%;
    text-transform: capitalize;
    font-size: 1.2rem;
    line-height: 1.4rem;
`;

export const IconsContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    gap: 5px;
    bottom: .7rem;
    right: 1.2rem
`;