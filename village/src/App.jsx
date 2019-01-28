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

const baseURL = "http://localhost:3333";

class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {
    smurfs: [],
    selectedSmurf: "",
    newName: "",
    newAge: "",
    newHeight: "",
    isUpdating: false,
    changedName: "",
    changedAge: "",
    changedHeight: ""
  };

  // Life cycle methods

  componentDidMount() {
    this.getSmurfs();
  }

  // AJAX methods

  getSmurfs() {
    axios
      .get(`${baseURL}/smurfs`)
      .then(res =>
        this.setState(
          {
            smurfs: res.data
          },
          () => console.log(this.state.smurfs)
        )
      )
      .catch(error => {
        this.setState({
          error
        });
        console.log(error);
        alert(error);
      });
  }

  postSmurf() {
    const newSmurf = {
      name: this.state.newName,
      age: Number(this.state.newAge),
      height: Number(this.state.newHeight)
    }

    axios
      .post(`${baseURL}/smurfs`, newSmurf)
      .then(res => {
        this.setState(
          {
            smurfs: res.data,
            newName: "",
            newAge: "",
            newHeight: ""
          },
          () => {
            console.log(res.data);
            alert(`${newSmurf.name} has arrived in Smurf Village!`);
          }
        );
      })
      .catch(error => {
        this.setState({
          error
        });
        console.log(error);
        alert(error);
      });
  }

  deleteSmurf(smurfToDelete) {
    axios
      .delete(`${baseURL}/smurfs/${smurfToDelete.id}`)
      .then(res => {
        this.setState(
          {
            smurfs: res.data,
            selectedSmurf: "",
            isUpdating: false,
            changedName: "",
            changedAge: "",
            changedHeight: ""
          },
          () => {
            console.log(res.data);
            alert(
              `${
                smurfToDelete.name
              } has gone on vacation.\nHe/She won't be in Smurf Village for a while....`
            );
            this.props.history.push("/smurfs");
          }
        );
      })
      .catch(error => {
        this.setState({
          error
        });
        console.log(error);
        alert(error);
      });
  }

  putSmurf(smurfPutId) {
    axios
      .put(`${baseURL}/smurfs/${smurfPutId}`, {
        name: this.state.changedName,
        age: this.state.changedAge,
        height: this.state.changedHeight
      })
      .then(res => {
        this.setState(
          {
            smurfs: res.data,
            isUpdating: false
          },
          () => {
            console.log(res.data);
            alert(
              `${
                res.data.name
              } has successfully updated his/her village records.`
            );
          }
        );
      })
      .catch(error => {
        this.setState({
          error
        });
        console.log(error);
        alert(error);
      });
  }

  // Data processing methods

  validateInputs(name, age, height) {
    if (isNaN(age) || Number(age) < 0) {
      alert("Please enter a valid age value.");
      return false;
    }
    if (isNaN(height) || Number(height) < 0) {
      alert("Please enter a valid height value.");
      return false;
    }
    return true;
  }

  // Event handling methods

  handleSubmit = e => {
    e.preventDefault();
    if (
      e.currentTarget.name === "addSmurfForm" &&
      this.validateInputs(
        this.state.newName,
        this.state.newAge,
        this.state.newHeight
      )
    ) {
      this.postSmurf();
    } else if (
      e.currentTarget.name === "updateSmurfForm" &&
      this.validateInputs(
        this.state.changedName,
        this.state.changedAge,
        this.state.changedHeight
      )
    ) {
      this.putSmurf();
    }
  };

  // e,target to directly target whatever input has changed inside a form
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  // e.currentTarget to target the element that this event handler method is bound to
  handleSmurfSelect = e => {
    this.setState(
      {
        selectedSmurf: this.state.smurfs.find(
          smurf => smurf.id === e.currentTarget.value
        )
      },
      () => this.props.history.push(`/smurfs/${this.state.selectedSmurf.id}`)
    );
  };

  // e.currentTarget to target the element that this event handler method is bound to
  handleClick = e => {
    if (e.currentTarget.name === "clearAddSmurfForm") {
      this.setState({
        newName: "",
        newAge: "",
        newHeight: ""
      });
    } else if (e.currentTarget.name === "deleteSmurf") {
      const smurfToDelete = this.state.smurfs.find(
        smurf => smurf.id === e.currentTarget.dataset.smurf
      );
      this.deleteSmurf(smurfToDelete);
    } else if (e.currentTarget.name === "clearUpdateSmurfForm") {
      this.setState({
        changedName: "",
        changedAge: "",
        changedHeight: ""
      });
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
                <AddSmurfForm
                  newName={this.state.newName}
                  newAge={this.state.newAge}
                  newHeight={this.state.newHeight}
                  handleChange={this.handleChange}
                  handleClick={this.handleClick}
                  handleSubmit={this.handleSubmit}
                />
              )}
            />
            <Route
              path="/smurfs"
              render={props => (
                <SmurfList
                  {...props}
                  smurfs={this.state.smurfs}
                  selectedSmurf={this.state.selectedSmurf}
                  isUpdating={this.state.isUpdating}
                  handleSmurfSelect={this.handleSmurfSelect}
                  handleClick={this.handleClick}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
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
