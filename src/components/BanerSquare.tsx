import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { device } from "../utils/const";

const StyledBanerSquare = styled.div<{
  imageSm: string;
  imageMd: string;
  textBottom: boolean;
  isTextLight: boolean;
}>`
  max-height: 500px;
  background-image: url(${({ imageSm }) => imageSm});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: inline-flex;
  padding: 5% 0;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ textBottom }) => (textBottom ? "end" : "start")};
  color: ${({ isTextLight }) => (isTextLight ? "#ffffff" : "#1d1d1f")};
  box-sizing: border-box;
  @media ${device.laptop} {
    max-height: 692px;
    background-image: url(${({ imageMd }) => imageMd});
  }
`;

const HeroTitle = styled.h1`
  font-weight: 500;
  margin-bottom: 0px;
  margin-top: 10px;
  font-size: 28px;
  font-weight: 600;
  @media ${device.laptop} {
    font-size: 48px;
    margin-top: auto;
  }
`;

const HeroDescription = styled.span`
  font-size: 24px;
  margin-bottom: 20px;
  line-height: 120%;
  text-align: center;
  white-space: pre-line;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  > :nth-child(2) {
    margin-left: 14px;
  }
`;
const Container = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr;
  width: 100%;
  margin: 0 0 15px 0;
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    margin-top: auto;
    margin: 0 15px 15px 15px;
  }
`;

interface BanerSquareModel {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  button?: "default" | "blue-outline" | "blue";
  buttonText2?: string;
  buttonLink2?: string;
  button2?: "default" | "blue-outline" | "blue";
  textBottom: boolean;
  isTextLight: boolean;
  imageMd: string;
  imageSm: string;
}

interface BanerSquareProps {
  baners: BanerSquareModel[];
}

const BanerSquare: React.FC<BanerSquareProps> = ({ baners }) => {
  return (
    <Container>
      {baners.map((baner) => (
        <StyledBanerSquare
          textBottom={baner.textBottom}
          isTextLight={baner.isTextLight}
          imageSm={`../../${baner.imageSm}`}
          imageMd={`../../${baner.imageMd}`}
          key={baner.title} // add a key prop to each item
        >
          <HeroTitle>{baner.title}</HeroTitle>
          <HeroDescription>{baner.description}</HeroDescription>
          <ButtonContainer>
            {baner.buttonText && baner.buttonLink && baner.button && (
              <Button
                size={"small"}
                palette={baner.button}
                href={baner.buttonLink}
              >
                {baner.buttonText}
              </Button>
            )}

            {baner.buttonText2 && baner.buttonLink2 && baner.button2 && (
              <Button
                size={"small"}
                palette={baner.button2}
                href={baner.buttonLink2}
              >
                {baner.buttonText2}
              </Button>
            )}
          </ButtonContainer>
        </StyledBanerSquare>
      ))}
    </Container>
  );
};

export default BanerSquare;
