import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import StyleVars from "../../StyleVars.js";
import StyleMixins from "../../StyleMixins.js";

const SmurfInfo = props => {
  const InfoArea = styled.section`
    width: 87.5%;
    background-color: ${StyleVars.Colors.SmurfInfo.bgColor};
    font-size: 1.6rem;
    color: ${StyleVars.Colors.SmurfInfo.Body.fontColor};
    padding: 10px;
    margin: 37.5px auto;

    div {
      ${StyleMixins.makeFlex(null, null, "center")}
    }
  `;

  const InfoAreaHeading = styled.h3`
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: ${StyleVars.Colors.SmurfInfo.Heading.fontColor};
    margin-bottom: 15px;
  `;

  const InfoFieldHeading = styled.span`
    width: 15%;
    font-weight: bold;
    margin: 10px 0;
  `;

  return (
    <InfoArea>
      <InfoAreaHeading>{props.selectedSmurf.name}</InfoAreaHeading>
      <div>
        <InfoFieldHeading>Age: </InfoFieldHeading>
        <span>{props.selectedSmurf.age}</span>
      </div>
      <div>
      <InfoFieldHeading>Height: </InfoFieldHeading>
        <span>{props.selectedSmurf.height} centimeters</span>
      </div>
    </InfoArea>
  )
};

SmurfInfo.propTypes = {
  selectedSmurf: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    height: PropTypes.string.isRequired
  }).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default SmurfInfo;
