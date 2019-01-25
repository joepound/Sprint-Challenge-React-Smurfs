import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import StyleVars from "../../StyleVars.js";
import StyleMixins from "../../StyleMixins.js";

import NavBar from "./NavBar.js";

const Header = props => {
  const Wrapper = styled.header`
    background-color: ${StyleVars.Colors.Header.bgColor};
    box-shadow: 0 0.5px 5px 2px grey;
    padding: 15px 0;
  `;

  const AppName = styled.h1`
    text-align: center;
    font-size: 3.5rem;
    font-weight: bold;
    text-shadow: 1px 2px darkgrey;
    letter-spacing: 5px;
    padding-left: 5px;
    margin-bottom: 20px;

    & > a {
      ${StyleMixins.removeHyperlinkStyling(StyleVars.Colors.Header.fontColor)}
    }
  `;

  return (
    <Wrapper>
      <AppName>
        <NavLink exact to="/">
          Friends
        </NavLink>
      </AppName>
      <NavBar />
    </Wrapper>
  );
};

export default Header;
