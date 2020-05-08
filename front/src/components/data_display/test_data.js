import React, {Component} from 'react';

export default class TestData extends Component {
  state = {display_message: ""};

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL + '/api/test')
        .then(res => res.json())
        .then(body => {
          let text = body["Test response"];
          this.setState({ display_message: text })
        });
  }

  render() {
    return (
      <div>
        <h1>API Data Here:</h1>
        <div>
            {this.state.display_message}
        </div>
      </div>
    );
  }
}
