import styled from "styled-components";
import StyleVars from "../../StyleVars";
import StyleMixins from "../../StyleMixins";

import { NavLink } from "react-router-dom";

export const Wrapper = styled.header`
  background-color: ${StyleVars.Colors.Header.bgColor};
  box-shadow: 0 0.5px 5px 2px grey;
  padding: 15px 0;
`;

export const AppNameHeading = styled.h1`
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

export const NavArea = styled.nav`
  & > ul {
    ${StyleMixins.makeFlex(null, "center", "center")}

    & > li {
      text-align: center;
      margin: 0 5%;
    }
  }
`;

export const NavItem = styled(NavLink)`
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
