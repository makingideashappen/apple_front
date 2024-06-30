import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { device } from "../utils/const";

interface Link {
  link: {
    text: string;
    href: string;
  };
}

interface MobileMenuProps {
  links: Link[];
}
const MobileMenu = (props: MobileMenuProps) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <HamburgerButton onClick={toggleMenu} open={open}>
        <span />
        <span />
      </HamburgerButton>
      <Menu open={open}>
        <MenuText open={open}>
          {props.links.map(({ link }) => (
            <MenuItem key={link.text}>
              <Link href={link.href}>{link.text}</Link>
            </MenuItem>
          ))}
        </MenuText>
      </Menu>
    </Container>
  );
};

const Link = styled.a`
  position: relative;
  display: flex;
  color: #e8e8ed;
  text-decoration: none;
  @media ${device.laptop} {
    display: none;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  @media ${device.laptop} {
    display: none;
  }
`;

const HamburgerButton = styled.button<{
  open: boolean;
}>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 15;
  position: relative;
  height: 48px;
  span {
    display: inline-block;
    width: 15px;
    height: 1.5px;
    background: #d1d1d1;
    transition: transform 0.3s ease-in-out;
    &:nth-of-type(1) {
      margin-bottom: 5px;
      ${(props) =>
        props.open &&
        `
      transform: rotate(45deg) translate(4px, 0);
    `}
    }
    &:nth-of-type(2) {
      ${(props) =>
        props.open &&
        `
      transform: rotate(-45deg) translate(4px, 0px);
    `}
    }
  }
`;

const Menu = styled.div<{
  open: boolean;
}>`
  padding-top: 50px;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  color: #000000;
  transform: ${(props) =>
    props.open ? " translateY(0%)" : " translateY(-150%)"};
  animation: ${(props) => (props.open ? slideIn : slideOut)} 0.3s ease-in-out;
`;

const MenuText = styled.ul<{
  open: boolean;
}>`
  padding-top: 50px;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: calc(100vw - 48px);
  background: #161617;
  opacity: ${(props) => (props.open ? " 1" : " 0")};
  transition: ease-in-out opacity 1s;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-bottom: 10px;
  font-size: 28px;
  line-height: 1.1428571429;
  font-weight: 600;
  letter-spacing: 0.007em;
  font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  line-height: 150%;
  padding: 3px 0 4px 60px;
`;

const slideIn = keyframes`
  from {
    transform: translateY(-150%);
    opacity:1;
  }
  to {
    transform: translateY(0%);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0%);

  }
  to {
    transform: translateY(-150%);
  }
`;

export default MobileMenu;
