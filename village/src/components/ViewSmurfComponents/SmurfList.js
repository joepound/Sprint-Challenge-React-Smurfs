import React, { Fragment } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import StyleVars from "../../StyleVars.js";
import StyleMixins from "../../StyleMixins.js";

const SmurfList = props => {
  const Header = styled.h2`
    display: inline-block;
    background-color: ${StyleVars.Colors.Village.Header.bgColor};
    font-size: 2.25rem;
    font-weight: bold;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${StyleVars.Colors.Village.Header.fontColor};
    padding: 7.5px 10px 5px 5px;
    margin-bottom: 37.5px;
  `;

  const SmurfSelect = styled.div`
    display: inline-block;
    background-color: ${StyleVars.Colors.Village.Selection.bgColor};
    font-weight: bold;
    color: ${StyleVars.Colors.Village.Selection.fontColor};
    padding: 10px;

    label {
      font-size: 1.6rem;
    }
    select {
      display: block;
      width: 100%;
      padding: 10px;
      margin: 15px auto;

      option {
        padding: 10px;
      }
    }
  `;

  return (
    <Fragment>
      <Header>Welcome To Smurf Village!</Header>
      <SmurfSelect>
        {props.smurfs.length ? (
          <Fragment>
            <label htmlFor="smurfSelect">Select a friend:</label>
            <select id="smurfSelect" onChange={props.handleChange} value={props.selectedSmurf ? props.selectedSmurf.id : ""}>
              <option defaultValue hidden>
                Select a smurf:
              </option>
            </select>
          </Fragment>
        ) : (
          <label htmlFor="smurfSelect">
            It looks like there are no smurfs in the village right now....
          </label>
        )}
      </SmurfSelect>
    </Fragment>
  );
};

SmurfList.propTypes = {
  smurfs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  selectedSmurf: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SmurfList;
