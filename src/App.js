import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Header from './components/Header';
import { useState } from 'react';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <Home todoList={todoList} setTodoList={setTodoList}></Home>
          }></Route>
        <Route
          path="/todo"
          element={
            <Todo todoList={todoList} setTodoList={setTodoList}></Todo>
          }></Route>
      </Routes>
    </>
  );
};

export default App;
