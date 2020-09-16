import {
  Row,
  Form,
} from "react-bootstrap";

const TodoItem = ({id=0, content="This is a todo", status}) => {
  return (
    <Row>
      <Form>
        <Form.Group controlId={id}>
          <Form.Check type="checkbox" label={content} />
        </Form.Group>
      </Form>
    </Row>
  )
}

export default TodoItem;
