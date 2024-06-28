import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  /* Add global styles here */
  body {
  
    margin-top: 48px;
  }
    main {  display:flex;
flex-wrap:wrap;
    }
  section {
  display:flex;
  flex-wrap: wrap;
  width:100vw;
  max-width:2560px;
  margin:0 auto;
  }
`;

export default GlobalStyles;
