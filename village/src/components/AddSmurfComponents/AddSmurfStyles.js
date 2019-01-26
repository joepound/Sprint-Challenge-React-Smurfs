import styled from "styled-components";
import StyleVars from "../../StyleVars.js";
import StyleMixins from "../../StyleMixins.js";

const FormField = styled.div`
  margin-bottom: 20px;

  label {
    ${StyleMixins.FormInputs.makeFormLabel(
      StyleVars.Colors.Form.Label.fontColor
    )}
  }
`;

export const FormTextField = styled(FormField)`
  label {
    display: inline-block;
    margin-bottom: 10px;
  }

  input {
    ${StyleMixins.FormInputs.makeFormTextField(
      StyleVars.Colors.Form.Input.fontColor
    )}
  }
`;

export const FormNumberField = styled(FormField)`
  input {
    ${StyleMixins.FormInputs.makeFormNumberField(
      StyleVars.Colors.Form.Input.fontColor
    )}
  }
`;

export const FormButtons = styled.div`
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
