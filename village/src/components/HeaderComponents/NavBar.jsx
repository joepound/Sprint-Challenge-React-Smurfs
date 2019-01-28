import React from "react";

import { NavArea, NavItem } from "./HeaderStyles.js";

const NavBar = props => {
  return (
    <NavArea>
      <ul>
        <li>
          <NavItem exact to="/add">
            Add Smurf
          </NavItem>
        </li>
        <li>
          <NavItem exact to="/smurfs">
            View Residents
          </NavItem>
        </li>
      </ul>
    </NavArea>
  );
};

export default NavBar;
