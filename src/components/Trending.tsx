import React, { useState } from "react";

import ButtonPlay from "./ButtonPlay";

import styled, { keyframes } from "styled-components";
import Button from "./Button";
import { size, device } from "../utils/const";
import useScreenWidth from "../utils/getScreenWIdth";
import Marquee from "react-fast-marquee";

const slideUp = keyframes`
  0% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const Container = styled.div`
  overflow: hidden;
`;

const Slide = styled.div`
  position: relative;
  margin: 0 5px;
  @media ${device.laptopL} {
    margin: 0 5px;
  }
`;

const Row = styled.div`
  max-width: calc(100vw - 60px);
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0 30px;
`;

const Details = styled.div`
  opacity: 0;
  height: calc(100% - 5px);
  cursor: pointer;
  position: absolute;
  top: -2px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out,
    background-image 0.5s ease-in-out;
  button {
    display: none;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.5);
    opacity: 1;
    a {
      display: block;
      animation: ${slideUp} 0.5s forwards;
    }
  }
  @media ${device.laptopL} {
    width: 100%;
  }
`;

interface Slide {
  id: number;
  imageSm: string;
  imageMd: string;
  buttonText: string;
  buttonLink: string;
  slogan: string;
}
interface TrendingProps {
  slides: Slide[];
}

const Trending: React.FC<TrendingProps> = (props) => {
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(50);
  const width = useScreenWidth();
  const isSmallScreen = width < size.laptop;

  const handleClick = () => {
    setPlaying(!playing);
  };

  // TO DO : FIX not smooth
  // const handleMouseOver = () => {
  //   setSpeed(49);
  // };

  // const handleMouseOut = () => {
  //   setSpeed(50);
  // };
  return (
    <Container>
      <Marquee play={playing} speed={speed}>
        {props.slides.map((item: Slide) => (
          <Slide key={item.id}>
            {isSmallScreen ? (
              <img src={"../../" + item.imageSm} alt="" />
            ) : (
              <img src={"../../" + item.imageMd} alt="" />
            )}
            <Details>
              <Button size={"small"} palette={"default"} href={item.buttonLink}>
                {item.buttonText}
              </Button>
            </Details>
          </Slide>
        ))}
      </Marquee>
      <Row>
        <ButtonPlay playing={playing} onClick={() => handleClick()} />
      </Row>
    </Container>
  );
};
export default Trending;
