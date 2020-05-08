import React, {Component} from 'react';
import TagTable from "./tag_table";
import TestData from "./test_data";

export default class SomeTestData extends Component {
  render() {
    return (
      <div>
        <h1>Tags</h1>
        <p className="module-explanation">Tags are automated responses to messages that are typed in the chat.</p>
        <TestData />
        <p>Some test text</p>
      </div>
    );
  }
}
