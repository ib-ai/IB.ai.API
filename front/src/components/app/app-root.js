import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../structural/Home.js";

import Sidebar from "../structural/sidebar";

function SnackbarAlert(props) {
  return <Alert elevation={6} variant="filled" {...props} />;
}

export default class AppRoot extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      snackBarOpen: false,
      text: "",
      severity: "",
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
  }

  handleLogout(props) {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      snackBarOpen: true,
      text: props.text,
      severity: props.severity,
    });
  }

  handleLogin(props) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      snackBarOpen: true,
      text: props.text,
      severity: props.severity,
    });
  }

  handleSnackbarClose() {
    this.setState({
      ...this.state,
      snackBarOpen: false,
    });
  }

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.snackBarOpen}
          autoHideDuration={3000}
          onClose={this.handleSnackbarClose}
        >
          <SnackbarAlert
            onClose={this.handleSnackbarClose}
            severity={this.state.severity}
          >
            {this.state.text}
          </SnackbarAlert>
        </Snackbar>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home {...props} handleLogin={this.handleLogin} />
              )}
            />
            <Route
              exact
              path={"/dashboard"}
              render={(props) => (
                <Sidebar
                  {...props}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
