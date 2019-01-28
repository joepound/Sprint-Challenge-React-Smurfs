import React from "react";
import PropTypes from "prop-types";

import {
  FormTextField,
  FormNumberField,
  FormButtons
} from "./AddSmurfStyles.js";

const AddSmurfForm = props => {
  return (
    // onChange event bubbles upward, so placing it inside only the form is enough to detect input names
    <form
      name="addSmurfForm"
      onChange={props.handleChange}
      onSubmit={props.handleSubmit}
    >
      {/* Used id attributes to match labels and meet accessibility standards */}
      <FormTextField>
        <label htmlFor="newName">Name:</label>
        <input
          type="text"
          id="newName"
          name="newName"
          placeholder="Enter the smurf's name"
          value={props.newName}
          required
        />
      </FormTextField>
      <FormNumberField>
        <label htmlFor="newAge">Age:</label>
        <input
          type="number"
          id="newAge"
          name="newAge"
          min="0"
          placeholder="Age"
          value={props.newAge}
          required
        />
      </FormNumberField>
      <FormNumberField>
        <label htmlFor="newHeight">Height (in centimeters):</label>
        <input
          type="number"
          id="newHeight"
          name="newHeight"
          min="0"
          placeholder="cm."
          value={props.newHeight}
          required
        />
      </FormNumberField>
      <FormButtons>
        <button type="submit">Submit</button>
        <button type="reset" name="clearAddSmurfForm" onClick={props.handleClick}>Clear</button>
      </FormButtons>
    </form>
  );
};

AddSmurfForm.propTypes = {
  newName: PropTypes.string.isRequired,
  newAge: PropTypes.string.isRequired,
  newHeight: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default AddSmurfForm;
