import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";
import { Reset, GlobalStyles } from "./GlobalStyles.js";
import StyleVars from "./StyleVars.js";

import Header from "./components/HeaderComponents/Header.js";
import AddSmurfForm from "./components/AddSmurfComponents/AddSmurfForm.js";
import SmurfList from "./components/ViewSmurfComponents/SmurfList.js";

class App extends Component {
  state = {
    smurfs: [],
    selectedSmurf: ""
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res =>
        this.setState(
          {
            smurfs: res.data
          },
          () => console.log(this.state.smurfs)
        )
      )
      .catch(error =>
        this.setState({
          error
        })
      );
  }

  generateId() {
    return `${Math.floor(Math.random() * 1000) +
      String(Date.now()) +
      Math.floor(Math.random() * 1000)}`;
  }

  handleSubmit = e => {
    switch (e.currentTarget.name || e.currentTarget.id) {
      case "addSmurfForm":
        e.preventDefault();
        const postObject = {
          id: this.generateId(),
          name: e.currentTarget[0].value,
          age: +e.currentTarget[1].value,
          height: e.currentTarget[2].value
        };
        console.log(postObject)
        axios
          .post("http://localhost:3333/smurfs", { ...postObject })
          .then(res => {
            this.setState(
              {
                message: res.statusText,
                smurfs: res.data,
                selectedSmurf: ""
              },
              () => {
                console.log(res.data);
                alert(`${postObject.name} has arrived in Smurf Village!`)
              }
            );
          })
          .catch(error => {
            alert(error);
            this.setState({
              error
            });
          });
        break;
    }
  };

  handleChange = e => {};

  render() {
    const AppBlock = styled.div`
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
    `;

    const DisplayArea = styled.main`
      background-color: ${StyleVars.Colors.DisplayArea.bgColor};
      padding: 25px;
      margin: 20px auto;
    `;

    return (
      <Fragment>
        <Reset />
        <GlobalStyles />
        <AppBlock>
          <Header />
          <DisplayArea>
            <Route
              exact
              path="/add"
              render={props => (
                <AddSmurfForm handleSubmit={this.handleSubmit} />
              )}
            />
            <Route
              path="/village"
              render={props => (
                <SmurfList
                  smurfs={this.state.smurfs}
                  selectedSmurf={this.state.selectedSmurf}
                  handleChange={this.handleChange}
                />
              )}
            />
          </DisplayArea>
        </AppBlock>
      </Fragment>
    );
  }
}

export default App;
