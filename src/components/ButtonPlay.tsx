import React from "react";
import { styled } from "styled-components";
import start from "../../public/start.svg";
import stop from "../../public/start.svg";

const PlayStopButton = styled.button`
  background-color: #ccc;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 5;
  svg g path {
    width: 8px;
    height: 8px;
  }
`;

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <g>
      <path
        width="8px"
        d="M5,15.25V4.77A1.44,1.44,0,0,1,6.44,3.15a1.86,1.86,0,0,1,1.11.31l8.53,5c.76.44,1.17.8,1.17,1.51s-.41,1.07-1.17,1.51l-8.53,5a1.86,1.86,0,0,1-1.11.31A1.42,1.42,0,0,1,5,15.25Z"
      />
    </g>
  </svg>
);

const StopIcon = () => (
  <svg id="Exportable" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <g id="pause">
      <rect className="cls-1" x="3.75" y="3" width="4.5" height="14" rx="1.5" />
      <rect
        className="cls-1"
        x="11.75"
        y="3"
        width="4.5"
        height="14"
        rx="1.5"
      />
    </g>
  </svg>
);

interface ButtonProps {
  playing: boolean;
  onClick: (event: React.SyntheticEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ playing, onClick }) => (
  <PlayStopButton onClick={(e: React.SyntheticEvent) => onClick(e)}>
    {playing ? <PlayIcon /> : <StopIcon />}
  </PlayStopButton>
);

export default Button;
