// import Head from "next/head";
// import DefaultLayout from "../../components/defaultLayout";
// import TodoItem from "../../components/Todo/TodoItem";
// import {TodoList} from "../../components/Todo/TodoList";
// import Page from "../../components/Page";
// import todos from "./mockData.json";
// import TodoList from "../../components/Todo/TodoList";
// import SmallBox from '../../components/SmallBox';

import { Button, DatePicker } from 'antd';

const App = () => (
  <>
    <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
  </>
);

export default App;

// const Todos = () => {
//   return (
//     <div class='row'>
//       <SmallBox />
//     </div>
//       // <TodoList todos={todos} />
//   )
// }

// export default Todos;
