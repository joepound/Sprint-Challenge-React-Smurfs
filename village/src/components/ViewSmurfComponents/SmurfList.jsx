import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import {
  SmurfListContainer,
  SmurfSelectHeading,
  SmurfSelectArea,
  SmurfSelectInput
} from "./ViewSmurfStyles.js";

import SmurfInfo from "./SmurfInfo.jsx";

const SmurfList = props => {
  const routeProps = { ...props };

  return (
    <SmurfListContainer>
      <SmurfSelectHeading>Welcome To Smurf Village!</SmurfSelectHeading>
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
        render={props => (
          <SmurfInfo
            {...props}
            smurfs={routeProps.smurfs}
            handleClick={routeProps.handleClick}
          />
        )}
      />
    </SmurfListContainer>
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
