import TodoItem from './TodoItem';

const FilterArea = () => {
  return (
    <div>
      <h3>This is filter area</h3>
    </div>
  )
}

const TodoItems = ({todos}) => {
  return (
    todos.map(todo => {
      return (
        <TodoItem item={todo} />
      )
    })
  )
}

const todos = [
  {
    id: '1',
    content: 'Task 1'
  },
  {
    id: '2',
    content: 'Task 2'
  }
]

const TodoList = ({todos}) => {
  return (
    <>
      <FilterArea />
      <TodoItems todos={todos.items}/>
    </>
  )
}

export {
  FilterArea,
  TodoItems,
  TodoList as default
}
