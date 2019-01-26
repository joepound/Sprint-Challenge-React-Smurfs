import React from "react";
import { NavLink } from "react-router-dom";

import { Wrapper, AppNameHeading } from "./HeaderStyles.js";

import NavBar from "./NavBar.jsx";

const Header = props => {
  return (
    <Wrapper>
      <AppNameHeading>
        <NavLink exact to="/">
          Smurf Village
        </NavLink>
      </AppNameHeading>
      <NavBar />
    </Wrapper>
  );
};

export default Header;
