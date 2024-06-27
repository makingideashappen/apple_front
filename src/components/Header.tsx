import React from "react";
import styled from "styled-components";

interface NavLinkProps {
  link: {
    text: string;
    href: string;
  };
}

const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(29, 29, 31, 0.8);
  backdrop-filter: blur(10px);
  height: 44px;
  width: 100vw;
  z-index: 10;
  svg {
    fill: #d1d1d1;
    cursor: pointer;
  }
  svg:hover {
    fill: #d4d4d4;
  }
`;

const NavLinks = styled.ul`
  min-width: 1024px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`;

const NavLink = styled.li`
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 100%;
  height: 100%;
  padding: 8px 0;
  a {
    color: #d1d1d1;
    text-decoration: none;
    &:hover {
      color: #d9d9d9;
    }
  }
`;

const LookupSvg = () => (
  <svg
    height="48"
    viewBox="0 0 17 48"
    width="14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m16.2294 29.9556-4.1755-4.0821a6.4711 6.4711 0 1 0 -1.2839 1.2625l4.2005 4.1066a.9.9 0 1 0 1.2588-1.287zm-14.5294-8.0017a5.2455 5.2455 0 1 1 5.2455 5.2527 5.2549 5.2549 0 0 1 -5.2455-5.2527z"></path>
  </svg>
);

const CartSvg = () => (
  <svg
    height="44"
    viewBox="0 0 14 44"
    width="14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
  </svg>
);

const LogoSvg = () => (
  <svg
    height="44"
    viewBox="0 0 14 44"
    width="14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
  </svg>
);

const NavLinkComponent: React.FC<NavLinkProps> = (props) => {
  return (
    <NavLink>
      <a href={props.link.href}>{props.link.text}</a>
    </NavLink>
  );
};

const NavItems = [
  {
    link: {
      text: "Store",
      href: "https://www.apple.com/mac",
    },
  },
  {
    link: {
      text: "Mac",
      href: "https://www.apple.com/ipad",
    },
  },
  {
    link: {
      text: "IPad",
      href: "https://www.apple.com/iphone",
    },
  },
  {
    link: {
      text: "iPhone",
      href: "https://www.apple.com/watch",
    },
  },
  {
    link: {
      text: "Watch",
      href: "https://www.apple.com/tv",
    },
  },
  {
    link: {
      text: "Vision",
      href: "https://www.apple.com/music",
    },
  },
  {
    link: {
      text: "AirPods",
      href: "https://www.apple.com/support",
    },
  },
  {
    link: {
      text: "TV & Home",
      href: "https://www.apple.com/support",
    },
  },
  {
    link: {
      text: "Entertainment",
      href: "https://www.apple.com/support",
    },
  },
  {
    link: {
      text: "Accessories",
      href: "https://www.apple.com/support",
    },
  },
  {
    link: {
      text: "Support",
      href: "https://www.apple.com/support",
    },
  },
];

const Header: React.FC = () => {
  return (
    <Nav>
      <NavLinks>
        <LogoSvg />
        {NavItems.map((link, x) => (
          <NavLinkComponent {...link} key={`${x}-nav-tem`} />
        ))}
        <LookupSvg />
        <CartSvg />
      </NavLinks>
    </Nav>
  );
};

export default Header;
