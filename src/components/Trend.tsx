import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonPlay from "./ButtonPlay";
// Import Swiper styles
import "../assets/swiperTrend.css";
import styled from "styled-components";
// import required modules
import { Autoplay } from "swiper/modules";

const Row = styled.div`
  width: 100vw;
`;

export default function App() {
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    setPlaying(!playing);
  };

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
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
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://picsum.photos/600/400.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/400.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/400.jpg" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/400.jpg" alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/400.jpg" alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/400.jpg" alt="Slide 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/400.jpg" alt="Slide 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/400.jpg" alt="Slide 8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/400.jpg" alt="Slide 9" />
        </SwiperSlide>
      </Swiper>
      <Row>
        <ButtonPlay playing={playing} onClick={handleClick} />
      </Row>
    </>
  );
}
