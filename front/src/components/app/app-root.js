import React, {Component} from 'react';

import logo from '../../ib-logo.svg';
import './app.css';

import TestData from "../data_display/test";

export default class AppRoot extends Component {

  render() {
    return (
      <div>
        <ul id="header-nav">
          <li><a href="#">Commands</a></li>
          <li><a href="#">Database</a></li>
          <li><a href="#">Configuration</a></li>
        </ul>
        <ul className="sidebar-nav">
          <li><a href="#">Tags</a></li>
        </ul>
        <div className="presentation-area">
          <TestData />
        </div>
      </div>
    );
  }
}
