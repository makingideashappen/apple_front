import React from "react";
import styled, { keyframes } from "styled-components";
import Cat from "../../public/vecteezy_cat-png-generative-ai_24597794.png";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const rotateAndScale = keyframes`
  0% {
    transform: scale(1.5) rotate(0deg);
     opacity: 1;
  }
  100% {
    transform: scale(0.5) rotate(360deg);
      opacity: 0;
  }
`;

const AnimatedImage = styled.img`
  position: fixed;
  top: 30vw;
  left: calc(50vw - 150px);
  animation: ${rotateAndScale} 3s ease-in-out;
  max-width: 300px;
  opacity: 0;
`;

const AnimatedDiv = styled.div`
  animation: ${fadeIn} 2s ease-in-out;
`;
interface AniamtionProps {
  children: React.ReactNode;
}
const Aniamtion = ({ children }: AniamtionProps) => {
  return (
    <AnimatedDiv>
      <AnimatedImage src={Cat} alt="Rotating Image" />
      {children}
    </AnimatedDiv>
  );
};

export default Aniamtion;
