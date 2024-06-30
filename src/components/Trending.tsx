import React, { useState, createRef, RefObject } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonPlay from "./ButtonPlay";
// Import Swiper styles
import "../assets/swiperTrend.css";
import styled, { keyframes } from "styled-components";
// import required modules
import { Autoplay } from "swiper/modules";
import Button from "./Button";
import { size, device } from "../utils/const";
import useScreenWidth from "../utils/getScreenWIdth";

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
const Inner = styled.div``;
const Row = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0 30px;
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  cursor: pointer;

  width: 238px;
  @media ${device.laptop} {
    min-width: 330px;
  }
`;

const StyledSwiper = styled(Swiper)`
  min-width: 1200px;
`;

const Details = styled.div`
  opacity: 0;
  height: 100%;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: -5px;
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
    width: calc(100% + 10px);
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
  const swiperRef: RefObject<typeof Swiper> = createRef(); // RefObject<Swiper>
  const width = useScreenWidth();

  const isSmallScreen = width < size.laptop;

  const handleClick = () => {
    setPlaying(!playing);
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  return (
    <Container>
      <Inner>
        <StyledSwiper
          ref={swiperRef}
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          speed={20000}
          modules={[Autoplay]}
          freeMode={true}
          className="mySwiper"
          allowTouchMove={false} // Disable touch move
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            2160: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          {props.slides.map((item: Slide) => (
            <StyledSwiperSlide key={item.id}>
              {/* TO DO: check medium photo */}
              {isSmallScreen ? (
                <img src={"../../" + item.imageSm} alt="" />
              ) : (
                <img src={"../../" + item.imageMd} alt="" />
              )}
              <Details>
                <Button
                  size={"small"}
                  palette={"default"}
                  href={item.buttonLink}
                >
                  {item.buttonText}
                </Button>
              </Details>
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
      </Inner>
      <Row>
        <ButtonPlay playing={playing} onClick={() => handleClick()} />
      </Row>
    </Container>
  );
};
export default Trending;
