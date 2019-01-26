import StyleVars from "./StyleVars";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-family: ${StyleVars.Fonts.Global.bodyFontFamily};
    font-size: 62.5%;
  }
  p {
    font-size: 1.6rem;
    line-height: 1.2;
  }
  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
