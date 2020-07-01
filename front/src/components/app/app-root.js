import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Paper from "@material-ui/core/Paper";
import Alert from "@material-ui/lab/Alert";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
      darkMode: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
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

  toggleDarkMode() {
    this.setState({
      ...this.state,
      darkMode: !this.state.darkMode,
    });
  }

  render() {
    const theme = createMuiTheme({
      palette: {
        type: this.state.darkMode ? "dark" : "light",
      },
    });

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
                <ThemeProvider theme={theme}>
                  <Paper height>
                    <Home {...props} handleLogin={this.handleLogin} />
                  </Paper>
                </ThemeProvider>
              )}
            />
            <Route
              exact
              path={"/dashboard"}
              render={(props) => (
                <ThemeProvider theme={theme}>
                  <Sidebar
                    {...props}
                    handleLogout={this.handleLogout}
                    loggedInStatus={this.state.loggedInStatus}
                    toggleDarkMode={this.toggleDarkMode}
                  />
                </ThemeProvider>
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
