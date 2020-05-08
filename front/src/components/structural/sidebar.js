import React, {Component} from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <h2>Sidebar</h2>
        <ul>
          <li>Tags</li>
          <li>Reactions</li>
          <li>Emoji Stats</li>
          <li>Filter</li>
        </ul>
      </div>
    );
  }
}
