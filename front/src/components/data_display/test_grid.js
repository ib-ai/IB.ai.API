import React, {Component} from 'react';

export default class TestData extends Component {
  state = {display_message: ""};

  componentDidMount() {
    fetch('/api/test')
        .then(res => res.json())
        .then(body => {
          let text = body["Test response"];
          this.setState({ display_message: text })
        });
  }

  render() {
    return (
      <div>
        <h1>A header</h1>
        <div>
            {this.state.display_message}
        </div>
        <Grid>
          <Row start="xs">
            <Col xs={12} sm={4} md={6} lg={3} className="col1">
              <div className="ring-island">
                <div className="ring-island__header">
                  <span className="ring-island__title">Title</span>
                  <span className="ring-island__header-button">Button1</span>
                  <span className="ring-island__header-button">Button2</span>
                </div>
                <div className="ring-island__content">Content</div>
              </div>
            </Col>
            <Col xs={12} sm={8} md={6} lg={3} className="col2">
              <div className="ring-island">
                <div className="ring-island__header">
                  <span className="ring-island__title">Title</span>
                  <span className="ring-island__header-button">Button1</span>
                  <span className="ring-island__header-button">Button2</span>
                </div>
                <div className="ring-island__content">Content</div>
              </div>
            </Col>
            <Col xs={12} smOffset={4} sm={8} md={12} lg={6} className="col3">
              <div className="ring-island">
                <div className="ring-island__header">
                  <span className="ring-island__title">Title</span>
                  <span className="ring-island__header-button">Button1</span>
                  <span className="ring-island__header-button">Button2</span>
                </div>
                <div className="ring-island__content">Content</div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
