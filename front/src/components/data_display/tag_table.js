import React, {Component} from 'react';

export default class TagTable extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch('/api/tags/230296179991248896')
        .then(res => res.json())
        .then(body => {
          let tags_list = body["tags"];
          this.setState({ data: tags_list });
        });
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Trigger</th>
              <th>Response</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(tag =>
              <tr>
                <th>{Object.keys(tag)[0]}</th>
                <td>{Object.values(tag)[0]}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
