import React from "react";
import styled, { css, keyframes } from "styled-components";

const Container = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const accordionAnimation = keyframes`
  0% {
    max-height: 0;
    opacity:0;
   }
  100% {
    max-height: 500px;
    opacity:1;

   }
`;

const AccordionToggle = styled.button<{
  expanded: boolean;
}>`
  background-color: transparent;
  border: none;
  padding: 10px 0;
  font-size: 12px;
  cursor: pointer;
  color: #6e6e73;
  width: 100%;
  text-align: left;
  position: relative;
  border-top: 1px solid #6e6e73;
  &:after {
    top: 30%;
    right: 0;
    content: "";
    position: absolute;
    border-left: 1.5px solid #6e6e73;
    border-bottom: 1.5px solid #6e6e73;
    width: 7px;
    height: 7px;
    transform: rotate(135deg);
  }
  ${(props) =>
    props.expanded &&
    css`
      &:after {
        transform: rotate(315deg);
      }
    `}
`;

const AccordionContent = styled.div<{
  expanded: boolean;
}>`
  display: none;
  color: #6e6e73;
  font-size: 12px;

  ${(props) =>
    props.expanded &&
    css`
      display: block;
    `}
  li {
    padding: 6px 14px;
    list-style: none;
    a {
      text-decoration: none;
      color: #6e6e73;
    }
  }
  ${(props) =>
    props.expanded &&
    css`
      animation: ${accordionAnimation} 0.5s ease-in-out;
      max-height: 500px;
    `}
`;

interface Link {
  text: string;
  href: string;
}

interface FooterAccordion {
  title: string;
  links: Link[];
}
interface FooterAccordionProps {
  data: FooterAccordion;
}
const FooterAccordion = ({ data }: FooterAccordionProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <AccordionToggle expanded={expanded} onClick={handleToggle}>
        {data.title}
      </AccordionToggle>
      <AccordionContent expanded={expanded}>
        {data.links.map((link: Link) => (
          <li key={link.text}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </AccordionContent>
    </Container>
  );
};

export default FooterAccordion;
