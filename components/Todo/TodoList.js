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
        <TodoItem key={todo.id} id={todo.id} content={todo.content} />
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

const TodoList = () => {
  return (
    <>
      <FilterArea />
      <TodoItems todos={todos}/>
    </>
  )
}

export {
  FilterArea,
  TodoItems,
  TodoList
}
