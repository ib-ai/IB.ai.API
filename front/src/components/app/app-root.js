import React, {Component} from 'react';

import Header from "../structural/header";
import Body from "../structural/body";

export default class AppRoot extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}
