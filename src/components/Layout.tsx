// Layout.tsx
import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";

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
      <GlobalStyles />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
