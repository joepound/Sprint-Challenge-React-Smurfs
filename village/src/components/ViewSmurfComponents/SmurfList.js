import React, { Fragment } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import StyleVars from "../../StyleVars.js";
import StyleMixins from "../../StyleMixins.js";

const SmurfList = props => {
  const Header = styled.h2`
    display: inline-block;
    background-color: ${StyleVars.Colors.Village.Header.bgColor};
    font-size: 2.25rem;
    font-weight: bold;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${StyleVars.Colors.Village.Header.fontColor};
    padding: 7.5px 10px 5px 5px;
    margin-bottom: 50px;
  `;

  const FriendSelect = styled.div`
    label {
      font-size: 1.6rem;
    }
    select {
      display: block;
      width: 100%;
      padding: 10px;
      margin: 15px auto;

      option {
        padding: 10px;
      }
    }
  `;

  return (
    <Fragment>
      <Header>Welcome To Smurf Village!</Header>
      {/* <FriendSelect>
        {props.friends.length ? (
          <Fragment>
            <label htmlFor="friendSelect">Select a friend:</label>
            <select id="friendSelect" onChange={props.handleChange} value={props.selectedFriend ? props.selectedFriend.id : ""}>
              <option defaultValue hidden>
                Select a friend:
              </option>
              {props.friends.map(friend => (
                <option key={friend.id} value={friend.id}>
                  {friend.firstname} {friend.lastname}
                </option>
              ))}
            </select>
          </Fragment>
        ) : (
          <label htmlFor="friendSelect">
            You currently do not have any friends listed.
          </label>
        )}
      </FriendSelect> */}
    </Fragment>
  );
};

SmurfList.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default SmurfList;
