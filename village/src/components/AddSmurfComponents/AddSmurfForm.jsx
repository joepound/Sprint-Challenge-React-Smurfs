import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import StyleVars from "../../StyleVars.js";
import StyleMixins from "../../StyleMixins.js";

const AddSmurfForm = props => {
  const FormField = styled.div`
    margin-bottom: 20px;

    label {
      ${StyleMixins.FormInputs.makeFormLabel(
        StyleVars.Colors.Form.Label.fontColor
      )}
    }
  `;

  const FormTextField = styled(FormField)`
    label {
      display: inline-block;
      margin-bottom: 10px;
    }

    input {
      ${StyleMixins.FormInputs.makeFormTextField(StyleVars.Colors.Form.Input.fontColor)}
    }
  `;

  const FormNumberField = styled(FormField)`
    input {
      ${StyleMixins.FormInputs.makeFormNumberField(StyleVars.Colors.Form.Input.fontColor)}
    }
  `;

  const FormButtons = styled.div`
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
    // Used id attributes to match labels and meet accessibility standards
    <form name="addSmurfForm" onSubmit={props.handleSubmit}>
      <FormTextField>
        <label htmlFor="newName">Name:</label>
        <input
          id="newName"
          type="text"
          placeholder="Enter the smurf's name"
          required
        />
      </FormTextField>
      <FormNumberField>
        <label htmlFor="newAge">Age:</label>
        <input id="newAge" type="number" min="0" placeholder="Age" required />
      </FormNumberField>
      <FormNumberField>
        <label htmlFor="newHeight">Height (in centimeters):</label>
        <input id="newHeight" type="number" min="0" placeholder="cm." required />
      </FormNumberField>
      <FormButtons>
        <button type="submit">Submit</button>
        <button type="reset">Clear</button>
      </FormButtons>
    </form>
  );
};

AddSmurfForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default AddSmurfForm;
