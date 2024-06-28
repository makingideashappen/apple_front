import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css/navigation";

import "../assets/swiperCustomPagination.css";
import "../assets/swiperSlider.css";

import styled from "styled-components";

import Button from "../components/Button";

const Container = styled.div`
  width: 100%;
  margin-bottom: 24px;
  overflowx: "hidden";
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

const Details = styled.div`
  width: 100%;
  height: 20%;
  cursor: pointer;
  position: absolute;
  bottom: 5%;
  left: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 1.1;
  strong {
    margin-left: 18px;
    margin-right: 10px;
  }
  span {
    margin-left: 10px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
interface Slide {
  id: number;
  image: string;
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
  return (
    <Container>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {props.slides.map((item: Slide) => (
          <StyledSwiperSlide key={item.id}>
            {({ isActive }) => (
              <Overlay isActive={isActive}>
                <img src={"../../" + item.image} alt="" />
                <Details>
                  <Button
                    size={"large"}
                    colorScheme={"default"}
                    href={item.buttonLink}
                  >
                    {item.buttonText}
                  </Button>
                  <strong>{item.category}</strong>•<span>{item.slogan}</span>
                </Details>
              </Overlay>
            )}
          </StyledSwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
export default Slider;
