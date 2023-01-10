import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/todo" element={<Todo></Todo>}></Route>
      </Routes>
    </>
  );
};

export default App;
