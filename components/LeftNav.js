import {
  Tab,
  Nav,
  Row,
  Col
} from 'react-bootstrap';

const initialState = {}

class LeftNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
    )
  }
}

export default LeftNav;
