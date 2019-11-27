import React, {Component} from 'react';
import {Col, Grid, Row} from "@jetbrains/ring-ui";
import '@jetbrains/ring-ui/components/island-legacy/island-legacy.scss'
import MultiTable from "@jetbrains/ring-ui/components/table/multitable";
import TagTable from "./tag_table";

export default class TestData extends Component {

  render() {
    return (
      <div>
        <h1>Tags</h1>
        <p className="module-explanation">Tags are automated responses to messages that are typed in the chat.</p>
        <Grid>
          <div className="ring-island">
              <div className="ring-island__header">
                <span className="ring-island__title">Data</span>
                <span className="ring-island__header-button">Close</span>
                <span className="ring-island__header-button">Export</span>
              </div>
              <div className="ring-island__content">
                <TagTable />
              </div>
            </div>
        </Grid>
      </div>
    );
  }
}
