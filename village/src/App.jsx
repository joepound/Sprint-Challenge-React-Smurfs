import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import axios from "axios";

import ResetStyles from "./ResetStyles.js";
import GlobalStyles from "./GlobalStyles.js";
import { AppBlock, DisplayArea } from "./AppStyles.js";

import Header from "./components/HeaderComponents/Header.jsx";
import HomePage from "./components/HomePageComponents/HomePage.jsx";
import AddSmurfForm from "./components/AddSmurfComponents/AddSmurfForm.jsx";
import SmurfList from "./components/ViewSmurfComponents/SmurfList.jsx";

class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {
    smurfs: [],
    selectedSmurf: "",
    isUpdating: false
  };

  // Life cycle methods

  componentDidMount() {
    this.getSmurfs();
  }

  // AJAX methods

  getSmurfs() {
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

  // Event handling methods

  handleSubmit = e => {
    switch (e.currentTarget.name || e.currentTarget.id) {
      case "addSmurfForm":
        e.preventDefault();
        const postObject = {
          name: e.currentTarget[0].value,
          age: +e.currentTarget[1].value,
          height: e.currentTarget[2].value
        };
        console.log(postObject);
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
                alert(`${postObject.name} has arrived in Smurf Village!`);
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

  handleChange = (e, props) => {
    switch (e.currentTarget.name || e.currentTarget.id) {
      case "smurfSelect":
        this.setState(
          {
            selectedSmurf:
              this.state.smurfs.find(
                smurf => smurf.id === e.currentTarget.value
              ) || ""
          },
          () => props.history.push(`/village/${this.state.selectedSmurf.id}`)
        );
    }
  };

  handleClick = e => {
    switch (e.currentTarget.name || e.currentTarget.id) {
      case "deleteSmurf":
        const smurfDel = this.state.smurfs.find(
          smurf => smurf.id === e.currentTarget.dataset.smurf
        );
        axios
          .delete(`http://localhost:3333/smurfs/${smurfDel.id}`)
          .then(res => {
            this.setState(
              {
                message: res.statusText,
                smurfs: res.data,
                selectedSmurf: ""
              },
              () => {
                console.log(res.data);
                alert(
                  `${
                    smurfDel.name
                  } has gone on vacation.\nHe/She won't be in Smurf Village for a while....`
                );
              }
            );
          })
          .catch(error => {
            alert(error);
            this.setState({
              error
            });
          });
      case "updateSmurf":
        break;
    }
  };

  render() {
    return (
      <Fragment>
        <ResetStyles />
        <GlobalStyles />
        <AppBlock>
          <Header />
          <DisplayArea>
            <Route exact path="/" component={HomePage} />
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
                  {...props}
                  smurfs={this.state.smurfs}
                  selectedSmurf={this.state.selectedSmurf}
                  handleSmurfSelect={this.state.handleSmurfSelect}
                  handleChange={this.handleChange}
                  handleClick={this.handleClick}
                  isUpdating={this.state.isUpdating}
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
