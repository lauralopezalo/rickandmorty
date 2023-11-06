import styled from "styled-components";

export const CardContainer = styled.div`
    width: ${(props) => (props.$bigSize ? "260px" : "200px")};
    position: relative;
    overflow: hidden;
    background-color: var(--mywhite);
    border-radius: 20px;
    transition: all 0.2s; 
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);

    &:hover {
        box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.5);
        transform: translate(-5px, -5px);
    }

    @media (max-width: 450px) {
        width: 100%;
    }
`;


export const Image = styled.img`
    height: 220px;
    width: 100%;
    object-fit: cover;
`;

export const Description = styled.div`
    padding: 1.6rem;
`;

export const TitleContainer = styled.div`
    display: flex;
	flex-direction: column;
	justify-content: center;
`;


export const Title = styled.h1`
    font-size: ${(props) => (props.$bigSize ? "1.4rem" : "1.2rem")};
    line-height: ${(props) => (props.$bigSize ? "1.6rem" : "1.3rem")};
    text-transform: capitalize;
`;

export const CharacteristicConatiner = styled.div`
    width: 75%;
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