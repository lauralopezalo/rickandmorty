import styled from "styled-components";

export const CardContainer = styled.div`
    width: 200px;
    height: 250px;
    overflow: hidden;
    border-radius: 20px;
    transition: all 0.2s;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);

    &:hover {
        box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.5);
        transform: translate(-5px, -5px);
    }
`;


export const Image = styled.img`
    object-fit: cover;
`;


export const Title = styled.h1`
    text-transform: capitalize;
    font-size: 1.2rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 10px;
`;

export const Characteristic = styled.p`
    margin-bottom: 20px;
    width: 100%;
    text-transform: capitalize;
    font-size: 1.2rem;
`;

export const IconsContainer = styled.div`
    border-radius: 15px;
    display: flex;
    justify-content: end;
    gap: 5px;
`;