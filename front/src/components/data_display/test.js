import React, {Component} from 'react';
import TagTable from "./tag_table";

export default class TestData extends Component {

  render() {
    return (
      <div>
        <h1>Tags</h1>
        <p className="module-explanation">Tags are automated responses to messages that are typed in the chat.</p>
          <div>
              <div>
                <TagTable />
              </div>
            </div>
      </div>
    );
  }
}
