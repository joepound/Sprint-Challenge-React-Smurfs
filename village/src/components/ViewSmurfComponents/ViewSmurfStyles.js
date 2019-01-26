import styled from "styled-components";
import StyleVars from "../../StyleVars.js";
import StyleMixins from "../../StyleMixins.js";

export const SmurfListContainer = styled.section`
  ${StyleMixins.makeFlex("column", null, "center")}
`;

export const SmurfSelectHeading = styled.h2`
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

export const SmurfSelectArea = styled.div`
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

export const SmurfSelectInput = styled.select`
  ${StyleMixins.FormInputs.makeSelectInput(
    StyleVars.Colors.Village.SelectInput.bgColor,
    StyleVars.Colors.Village.SelectInput.fontColor
  )}
`;

export const SmurfInfoArea = styled.section`
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

export const SmurfInfoUpdateIcon = styled.img`
  position: absolute;
  top: 5px;
  right: 5px;
  max-width: 25px;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const SmurfInfoHeading = styled.h3`
  text-align: center;
  font-size: 2.25rem;
  font-weight: bold;
  color: ${StyleVars.Colors.SmurfInfo.Heading.fontColor};
  margin-bottom: 30px;
`;

export const SmurfFieldName = styled.span`
  width: 20%;
  font-weight: bold;
  margin: 10px 0;
`;

export const SmurfActionButton = styled.div`
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
