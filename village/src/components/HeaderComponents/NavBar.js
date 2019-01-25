import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import StyleVars from "../../StyleVars";
import StyleMixins from "../../StyleMixins";

const NavBar = props => {
  const NavArea = styled.nav`
    & > ul {
      ${StyleMixins.makeFlex(null, "center", "center")}

      & > li {
        text-align: center;
        margin: 0 5%;
      }
    }
  `;

  const NavBarItem = styled(NavLink)`
    ${StyleMixins.removeHyperlinkStyling(StyleVars.Colors.Header.fontColor)}

    display: inline-block;
    font-size: 1.8rem;
    transition: transform 500ms;

    &:hover {
      transform: scale(1.15);
      transition: all 375ms;
    }

    &:active {
      transform: scale(1.1);
      transition: all 125ms;
    }

    &.active {
      font-weight: bold;
      transform: scale(1.075);
      transition: none;
    }
  `;

  return (
    <NavArea>
      <ul>
        <li>
          <NavBarItem exact to="/add">
            Add Smurf
          </NavBarItem>
        </li>
        <li>
          <NavBarItem exact to="/friends">
            Smurf Village
          </NavBarItem>
        </li>
      </ul>
    </NavArea>
  );
};

export default NavBar;
