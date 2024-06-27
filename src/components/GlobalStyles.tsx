import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  /* Add global styles here */
  body {
  
    margin-top: 48px;
  }
  section {
  display:flex;
  flex-wrap: wrap;
  width:100vw;

  }
`;

export default GlobalStyles;
