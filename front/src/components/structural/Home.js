import React from "react";
import { Button, Grid } from "@material-ui/core";

function Home(props) {
  const handleSuccessfulAuth = () => {
    props.handleLogin({ text: "Logged in!", severity: "success" });
    props.history.push("/dashboard");
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Button onClick={handleSuccessfulAuth}>Log In With Discord</Button>
    </Grid>
  );
}

export default Home;
