import React from 'react';
import {
  Col,
  Tab
} from 'react-bootstrap';

const initialState = {}

class PageContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <Col sm={9}>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <p>This this the content</p>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <p>This this the content</p>
          </Tab.Pane>
        </Tab.Content>
      </Col>
    )
  }
}

export default PageContent;
