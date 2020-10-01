import ListGroup from 'react-bootstrap/ListGroup'
import styles from './TodoItem.module.css'

const TodoItem = ({item}) => {
  return (
    <ListGroup.Item>
      <div class="row">
        <div class="col-md-1 col-sm-2 col-12">
          <input type="checkbox" />
        </div>
        <div class="col-md-4 col-sm-6 col-12">
          {item.content}
        </div>
        <DueDate dueDate={item.dueDate} />
        <div class="col-md-2 col-sm-2 col-12">
          {item.status}
        </div>
      </div>
    </ListGroup.Item>
  )
}


const DueDate = ({dueDate}) => {
  return (
        <div className={`col-md-2 col-sm-2 col-12 ${styles.dueDate}`}>
          {dueDate}
        </div>
  )
}
export {
  DueDate,
  TodoItem as default
}
