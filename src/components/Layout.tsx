// Layout.tsx
import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Animation from "./Animation";

interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Animation>
        <main>{children}</main>
        <Footer />
      </Animation>
    </Container>
  );
};

export default Layout;
