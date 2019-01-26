import React from "react";
import PropTypes from "prop-types";

import { FormTextField, FormNumberField, FormButtons } from "./AddSmurfStyles.js";

const AddSmurfForm = props => {
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
