import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { device } from "../utils/const";

const StyledBanerSquare = styled.div<{
  imageSm: string;
  imageMd: string;
  isTextBottom: boolean;
  isTextLight: boolean;
}>`
  background-image: url(${({ imageSm }) => imageSm});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: inline-flex;
  margin: 5px 7.5px;
  padding: 2% 0;
  max-height: 692px;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ isTextBottom }) => (isTextBottom ? "end" : "start")};
  box-sizing: border-box;
  color: ${({ isTextLight }) => (isTextLight ? "#ffffff" : "#1d1d1f")};
  margin-bottom: 10px;
  @media ${device.laptop} {
    background-image: url(${({ imageMd }) => imageMd});
    width: calc(50% - 15px);
  }
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 0px;
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

interface BanerSquareModel {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonColorScheme?: "default" | "blue-outline" | "blue";
  buttonText2?: string;
  buttonLink2?: string;
  buttonColorScheme2?: "default" | "blue-outline" | "blue";
  isTextBottom?: boolean;
  isTextLight?: boolean;
  imageMd: string;
  imageSm: string;
}
const BanerSquare: React.FC<BanerSquareModel> = ({
  title,
  description,
  buttonText,
  buttonLink = "/",
  buttonColorScheme = "default",
  buttonText2,
  buttonLink2 = "/",
  buttonColorScheme2 = "default",
  isTextBottom = false,
  isTextLight = false,
  imageMd,
  imageSm,
}) => {
  const isButton = buttonText2 && buttonLink2;
  return (
    <StyledBanerSquare
      isTextBottom={isTextBottom}
      isTextLight={isTextLight}
      imageSm={`../../${imageSm}`}
      imageMd={`../../${imageMd}`}
    >
      <HeroTitle>{title}</HeroTitle>
      <HeroDescription>{description}</HeroDescription>
      <ButtonContainer>
        <Button
          size={"small"}
          colorScheme={buttonColorScheme}
          href={buttonLink}
        >
          {buttonText}
        </Button>
        {isButton && (
          <Button
            size={"small"}
            colorScheme={buttonColorScheme2}
            href={buttonLink2}
          >
            {buttonText2}
          </Button>
        )}
      </ButtonContainer>
    </StyledBanerSquare>
  );
};

export default BanerSquare;
