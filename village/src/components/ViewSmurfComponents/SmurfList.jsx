import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import styled from "styled-components";
import StyleVars from "../../StyleVars.js";
import StyleMixins from "../../StyleMixins.js";

import SmurfInfo from "./SmurfInfo.jsx";

const SmurfList = props => {
  const routeProps = { ...props };

  const VillageContainer = styled.section`
    ${StyleMixins.makeFlex("column", null, "center")}
  `;

  const Header = styled.h2`
    display: inline-block;
    background-color: ${StyleVars.Colors.Village.Header.bgColor};
    font-size: 2.25rem;
    font-weight: bold;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${StyleVars.Colors.Village.Header.fontColor};
    padding: 7.5px;
    margin-bottom: 37.5px;
  `;

  const SmurfSelectArea = styled.div`
    display: inline-block;
    width: 90%;
    background-color: ${StyleVars.Colors.Village.Selection.bgColor};
    font-weight: bold;
    color: ${StyleVars.Colors.Village.Selection.fontColor};
    padding: 15px;
    margin: 0 auto;

    label {
      font-size: 1.6rem;
    }
    select {
      display: block;
      width: 100%;
      padding: 10px;
      margin: 15px auto 5px;

      option {
        padding: 10px;
      }
    }
  `;

  const SmurfSelectInput = styled.select`
    ${StyleMixins.FormInputs.makeSelectInput(
      StyleVars.Colors.Village.SelectInput.bgColor,
      StyleVars.Colors.Village.SelectInput.fontColor
    )}
  `;

  return (
    <VillageContainer>
      <Header>Welcome To Smurf Village!</Header>
      <SmurfSelectArea>
        {props.smurfs.length ? (
          <Fragment>
            <label htmlFor="smurfSelect">Residents of Smurf Village:</label>
            <SmurfSelectInput
              id="smurfSelect"
              value={props.selectedSmurf ? props.selectedSmurf.id : ""}
              onChange={e => props.handleChange(e, props)}
            >
              <option defaultValue hidden>
                Select a smurf
              </option>
              {props.smurfs.map(smurf => (
                <option key={smurf.id} value={smurf.id}>
                  {smurf.name}
                </option>
              ))}
            </SmurfSelectInput>
          </Fragment>
        ) : (
          <label htmlFor="smurfSelect">
            It looks like there are no smurfs around right now....
          </label>
        )}
      </SmurfSelectArea>
      <Route
        path="/village/:id"
        render={props => <SmurfInfo {...props} smurfs={routeProps.smurfs} handleClick={routeProps.handleClick} />}
      />
    </VillageContainer>
  );
};

SmurfList.propTypes = {
  smurfs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      height: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  selectedSmurf: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      height: PropTypes.string.isRequired
    }),
    PropTypes.string
  ]).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default SmurfList;
