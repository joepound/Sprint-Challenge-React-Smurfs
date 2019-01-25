import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import StyleVars from "../../StyleVars.js";
import StyleMixins from "../../StyleMixins.js";

import EditIcon from "./assets/edit-icon.png";

const SmurfInfo = props => {
  const selectedSmurf = props.smurfs.find(smurf => smurf.id === props.match.params.id)

  const InfoArea = styled.section`
    position: relative;
    width: 87.5%;
    background-color: ${StyleVars.Colors.SmurfInfo.bgColor};
    font-size: 1.6rem;
    color: ${StyleVars.Colors.SmurfInfo.Body.fontColor};
    padding: 10px;
    margin: 37.5px auto;

    div {
      ${StyleMixins.makeFlex(null, null, "center")}
      width: 87.5%;
      margin: 0 auto;
    }
  `;

  const InfoAreaUpdateIcon = styled.img`
    position: absolute;
    top: 5px;
    right: 5px;
    max-width: 25px;
    font-size: 1.2rem;
    cursor: pointer;
  `

  const InfoAreaHeading = styled.h3`
    text-align: center;
    font-size: 2.25rem;
    font-weight: bold;
    color: ${StyleVars.Colors.SmurfInfo.Heading.fontColor};
    margin-bottom: 30px;
  `;

  const InfoFieldHeading = styled.span`
    width: 20%;
    font-weight: bold;
    margin: 10px 0;
  `;

  const FormButtons = styled.div`
    display: block;
    width: 100%;
    margin-top: 50px;

    button {
      ${StyleMixins.FormInputs.makeFormButton(
        StyleVars.Colors.Form.Button.bgColor,
        StyleVars.Colors.Form.Button.fontColor,
        StyleVars.Colors.Form.Button.borderColor
      )}

      display: block;
      cursor: pointer;
    }
  `;

  return (
    <InfoArea>
      <InfoAreaUpdateIcon src={EditIcon} alt="Goto: edit mode" />
      <InfoAreaHeading>{selectedSmurf && selectedSmurf.name}</InfoAreaHeading>
      <div>
        <InfoFieldHeading>Age: </InfoFieldHeading>
        <span>{selectedSmurf && selectedSmurf.age}</span>
      </div>
      <div>
        <InfoFieldHeading>Height: </InfoFieldHeading>
        <span>{selectedSmurf && selectedSmurf.height} centimeters</span>
      </div>
      <FormButtons>
        <button
          type="button"
          name="deleteSmurf"
          data-smurf={selectedSmurf && selectedSmurf.id}
          onClick={props.handleClick}
        >
          Delete
        </button>
      </FormButtons>
    </InfoArea>
  );
};

SmurfInfo.propTypes = {
  smurfs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      height: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default SmurfInfo;
