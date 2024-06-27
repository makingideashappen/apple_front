import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { device } from "../utils/const";

const StyledHeroBanner = styled.div<{
  imageSm: string;
  imageMd: string;
  imageLg: string;
  isTextBottom: boolean;
}>`
  background-image: url(${({ imageSm }) => imageSm});
  @media ${device.laptop} {
    background-image: url(${({ imageMd }) => imageMd});
  }
  @media ${device.laptopL} {
    background-image: url(${({ imageLg }) => imageLg});
  }
  background-size: cover;
  background-position: center;
  height: 100vh;
  max-height: 692px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ isTextBottom }) => (isTextBottom ? "end" : "start")};
  box-sizing: border-box;
  color: #ffffff;
  background-color: #000;
  margin-bottom: 10px;
  padding: 2% 0;
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

interface HeroBannerModel {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonColorScheme?: "default" | "blue-outline" | "blue";
  buttonText2?: string;
  buttonLink2?: string;
  buttonColorScheme2?: "default" | "blue-outline" | "blue";
  isTextBottom?: boolean;
  imageLg: string;
  imageMd: string;
  imageSm: string;
}
const HeroBanner: React.FC<HeroBannerModel> = ({
  title,
  description,
  buttonText,
  buttonLink = "/",
  buttonColorScheme = "default",
  buttonText2,
  buttonLink2 = "/",
  buttonColorScheme2 = "default",
  isTextBottom = false,
  imageLg,
  imageMd,
  imageSm,
}) => {
  const isButton = buttonText2 && buttonLink2;
  return (
    <StyledHeroBanner
      isTextBottom={isTextBottom}
      imageSm={`../../${imageSm}`}
      imageMd={`../../${imageMd}`}
      imageLg={`../../${imageLg}`}
    >
      <HeroTitle>{title}</HeroTitle>
      <HeroDescription>{description}</HeroDescription>
      <ButtonContainer>
        <Button
          size={"large"}
          colorScheme={buttonColorScheme}
          href={buttonLink}
        >
          {buttonText}
        </Button>
        {isButton && (
          <Button
            size={"large"}
            colorScheme={buttonColorScheme2}
            href={buttonLink2}
          >
            {buttonText2}
          </Button>
        )}
      </ButtonContainer>
    </StyledHeroBanner>
  );
};

export default HeroBanner;
