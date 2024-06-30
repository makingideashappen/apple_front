import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css/navigation";

import "../assets/swiperCustomPagination.css";
import "../assets/swiperSlider.css";

import styled, { keyframes } from "styled-components";
import Button from "../components/Button";
import useScreenWidth from "../utils/getScreenWIdth";
import { size, device } from "../utils/const";

const Container = styled.div`
  width: 100%;
  overflowx: "hidden";
  margin-bottom: 12px;
  @media ${device.laptop} {
    margin-bottom: 24px;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  width: 65vw;
  cursor: pointer;
  position: realative;
`;

const Overlay = styled.div<{
  isActive: boolean;
}>`
  width: 65vw;
  cursor: pointer;
  position: realative;
  img {
    width: 100%;
    height: 100%;
    opacity: ${({ isActive }) => (isActive ? "1" : "0.5")};
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Details = styled.div`
  width: 100%;
  height: 10%;
  cursor: pointer;
  position: absolute;
  bottom: 10%;
  left: 0%;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  line-height: 1.1;
  strong {
    margin-left: 18px;
    margin-right: 10px;
    order: 5;
  }
  span {
    margin-left: 10px;
    text-align: center;
    margin-bottom: 5px;
    font-size: 14px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  animation: ${slideUp} 0.5s ease-in-out;
  animation-fill-mode: forwards;

  @media ${device.laptop} {
    flex-direction: row;
    left: 8%;
    span {
      margin-left: 10px;
      text-align: center;
      font-size: 20px;
      margin-bottom: 5px;
    }
    strong {
      margin-bottom: 0;
      order: 0;
    }
  }
`;

const Dot = styled.div`
  display: none;
  @media ${device.laptop} {
    display: flex;
  }
`;

interface Slide {
  id: number;
  imageMd: string;
  imageSm: string;
  buttonText: string;
  buttonLink: string;
  slideLink: string;
  category: string;
  slogan: string;
}

interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = (props) => {
  const width = useScreenWidth();
  const isSmallScreen = width < size.laptop;
  return (
    <Container>
      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation
      >
        {props.slides.map((item: Slide) => (
          <StyledSwiperSlide key={item.id}>
            {({ isActive }) => (
              <Overlay isActive={isActive}>
                <img
                  src={
                    isSmallScreen
                      ? `../../${item.imageSm}`
                      : `../../${item.imageMd}`
                  }
                  alt=""
                />
                {isActive && (
                  <Details>
                    <Button
                      size={isSmallScreen ? "small" : "large"}
                      palette={"default"}
                      href={item.buttonLink}
                    >
                      {item.buttonText}
                    </Button>
                    <strong>{item.category}</strong>
                    {item.category && <Dot>•</Dot>}
                    <span>{item.slogan}</span>
                  </Details>
                )}
              </Overlay>
            )}
          </StyledSwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
export default Slider;
