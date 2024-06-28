import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonPlay from "./ButtonPlay";
// Import Swiper styles
import "../assets/swiperTrend.css";
import styled, { keyframes } from "styled-components";
// import required modules
import { Autoplay } from "swiper/modules";
import Button from "./Button";
import useScreenWidth from "../utils/getScreenWIdth";

// const slideUp = keyframes`
//   0% {
//     transform: translateY(100%);
//   }
//   100% {
//     transform: translateY(0);
//   }
// `;

// const SlideUpContainer = styled.div`
//   transform: translateY(100%);
//   animation: ${slideUp} 0.5s ease-in-out;
//   animation-fill-mode: forwards;
// `;

const Row = styled.div`
  width: 100vw;
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0 30px;
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  cursor: pointer;
  position: realative;
`;

const Details = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  transition: background-color 0.5s ease-in-out,
    background-image 0.5s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

interface Slide {
  id: number;
  image: string;
  buttonText: string;
  buttonLink: string;
  slogan: string;
}
interface TrendingProps {
  slides: Slide[];
}

const Trending: React.FC<TrendingProps> = (props) => {
  const [playing, setPlaying] = useState(false);
  const [hover, setHover] = useState(false);

  // const { width } = useScreenWidth();
  // const bigscreen = Math.round(width / 400);
  const handleClick = () => {
    setPlaying(!playing);
  };

  return (
    <>
      <Swiper
        spaceBetween={20}
        centeredSlides={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        speed={18000}
        modules={[Autoplay]}
        freeMode={true}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
      >
        {props.slides.map((item: Slide) => (
          <StyledSwiperSlide key={item.id}>
            {/* TO DO: check medium photo */}
            <img src={"../../" + item.image} alt="" />
            <Details>
              <Button
                size={"small"}
                colorScheme={"default"}
                href={item.buttonLink}
              >
                {item.buttonText}
              </Button>
            </Details>
          </StyledSwiperSlide>
        ))}
      </Swiper>
      <Row>
        <ButtonPlay playing={playing} onClick={handleClick} />
      </Row>
    </>
  );
};
export default Trending;
