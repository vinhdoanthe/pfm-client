import Head from "next/head";
import DefaultLayout from "../../components/defaultLayout";
import TodoItem from "../../components/Todo/TodoItem";

const TodosList = () => {
  return (
    <DefaultLayout>
      <h1>This is a list of tasks</h1>
      <TodoItem id='1' content='Task 1' />
      <TodoItem id='2' content='Task 2' />
    </DefaultLayout>
  )
}

export default TodosList;
