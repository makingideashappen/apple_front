import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { device, size } from "../utils/const";
import useScreenWidth from "../utils/getScreenWIdth";

const StyledHeroBanner = styled.div<{
  imageSm: string;
  imageMd: string;
  imageLg: string;
  textBottom: boolean;
}>`
  max-height: 500px;
  background-image: url(${({ imageSm }) => imageSm});
  @media ${device.laptop} {
    max-height: 692px;
    background-image: url(${({ imageMd }) => imageMd});
  }
  @media ${device.laptopL} {
    background-image: url(${({ imageLg }) => imageLg});
  }
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ textBottom }) => (textBottom ? "end" : "start")};
  box-sizing: border-box;
  color: #ffffff;
  background-color: #000;
  margin-bottom: 15px;
  padding: 5% 0;
`;

const HeroTitle = styled.h1`
  font-weight: 500;
  margin-bottom: 0px;
  margin-top: 10px;
  font-size: 28px;
  font-weight: 600;
  @media ${device.laptop} {
    font-size: 48px;
  }
`;

const HeroDescription = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 120%;
  text-align: center;
  margin-bottom: 20px;
  white-space: pre-line;
  @media ${device.laptop} {
    font-size: 24px;
  }
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
  button?: "default" | "blue-outline" | "blue";
  buttonText2?: string;
  buttonLink2?: string;
  button2?: "default" | "blue-outline" | "blue";
  textBottom: boolean;
  imageLg: string;
  imageMd: string;
  imageSm: string;
}
const HeroBanner: React.FC<HeroBannerModel> = ({
  title,
  description,
  buttonText,
  buttonLink = "/",
  button = "default",
  buttonText2,
  buttonLink2 = "/",
  button2 = "default",
  textBottom,
  imageLg,
  imageMd,
  imageSm,
}) => {
  const isButton = buttonText2 && buttonLink2;
  const width = useScreenWidth();
  const buttonSize = width < size.laptop ? "small" : "large";
  return (
    <StyledHeroBanner
      textBottom={textBottom}
      imageSm={`../../${imageSm}`}
      imageMd={`../../${imageMd}`}
      imageLg={`../../${imageLg}`}
    >
      <HeroTitle>{title}</HeroTitle>
      <HeroDescription>{description}</HeroDescription>
      <ButtonContainer>
        <Button size={buttonSize} palette={button} href={buttonLink}>
          {buttonText}
        </Button>
        {isButton && (
          <Button size={buttonSize} palette={button2} href={buttonLink2}>
            {buttonText2}
          </Button>
        )}
      </ButtonContainer>
    </StyledHeroBanner>
  );
};

export default HeroBanner;
