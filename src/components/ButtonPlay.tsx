import React from "react";
import { styled } from "styled-components";

const PlayStopButton = styled.button`
  background-color: #ccc;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 10px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -24px;
  cursor: pointer;
  z-index: 5;
`;

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.55 17.45L12 19.9L14.45 17.45L12 14.1Z" />
  </svg>
);

const StopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C17.52 4 22 8.48 22 14C22 19.52 17.52 24 12 24C6.48 24 2 19.52 2 14C2 8.48 6.48 4 12 4Z" />
  </svg>
);

interface ButtonProps {
  playing: boolean;
  onClick: (event: React.SyntheticEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ playing, onClick }) => (
  <PlayStopButton onClick={(e: React.SyntheticEvent) => onClick(e)}>
    {playing ? <StopIcon /> : <PlayIcon />}
  </PlayStopButton>
);

export default Button;
