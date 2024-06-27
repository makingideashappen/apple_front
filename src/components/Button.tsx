import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  size: "small" | "large";
  colorScheme: "default" | "blue-outline" | "blue";
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Button = ({
  children,
  href,
  size,
  colorScheme,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      href={href}
      size={size}
      colorScheme={colorScheme}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.a<{
  size: "small" | "large";
  colorScheme: "default" | "blue-outline" | "blue";
}>`
  display: inline-block;
  text-decoration: none;
  font-weight: 600;
  font-size: ${({ size }) => (size === "small" ? "14px" : "16px")};
  padding: ${({ size }) => (size === "small" ? "8px 16px" : "12px 24px")};
  border-color: #2997ff;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  line-height: 1.42859;
  font-weight: 400;
  letter-spacing: -0.016em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;s
  min-width: 30px;
  border-radius:25px;
 
  ${({ colorScheme }) => {
    switch (colorScheme) {
      case "default":
        return css`
          background-color: #f5f5f7;
          color: #000;
          &:hover {
            background-color: #ffff;
          }
        `;
      case "blue-outline":
        return css`
          background-color: transparent;
          color: #006edb;
          border: 1px solid #006edb;
          &:hover {
            color: #ffffff;
            background-color: #006edb;
          }
        `;
      case "blue":
        return css`
          background-color: #006edb;
          color: #ffffff;
          &:hover {
            background-color: #0077ed;
          }
        `;
    }
  }};
`;

export default Button;
