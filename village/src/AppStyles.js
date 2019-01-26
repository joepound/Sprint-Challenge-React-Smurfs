import styled from "styled-components";
import StyleVars from "./StyleVars.js";

export const AppBlock = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

export const DisplayArea = styled.main`
  background-color: ${StyleVars.Colors.DisplayArea.bgColor};
  padding: 25px;
  margin: 20px auto;
`;