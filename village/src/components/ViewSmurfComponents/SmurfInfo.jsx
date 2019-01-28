import React from "react";
import PropTypes from "prop-types";

import {
  SmurfInfoArea,
  SmurfInfoUpdateIcon,
  SmurfInfoHeading,
  SmurfFieldName,
  SmurfActionButton
} from "./ViewSmurfStyles.js";

import EditIcon from "./assets/edit-icon.png";

const SmurfInfo = props => {
  const selectedSmurf = props.smurfs.find(
    smurf => smurf.id === props.match.params.id
  );

  return selectedSmurf ? (
    <SmurfInfoArea>
      <SmurfInfoUpdateIcon src={EditIcon} alt="Goto: edit mode" />
      <SmurfInfoHeading>{selectedSmurf && selectedSmurf.name}</SmurfInfoHeading>
      <div>
        <SmurfFieldName>Age: </SmurfFieldName>
        <span>{selectedSmurf && selectedSmurf.age}</span>
      </div>
      <div>
        <SmurfFieldName>Height: </SmurfFieldName>
        <span>{selectedSmurf && selectedSmurf.height} centimeters</span>
      </div>
      <SmurfActionButton>
        <button
          type="button"
          name="deleteSmurf"
          data-smurf={selectedSmurf && selectedSmurf.id}
          onClick={props.handleClick}
        >
          Delete
        </button>
      </SmurfActionButton>
    </SmurfInfoArea>
  ) : null;
};

SmurfInfo.propTypes = {
  smurfs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default SmurfInfo;
