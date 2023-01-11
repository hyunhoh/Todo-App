import styled from 'styled-components';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

const TodoMain = styled.main`
  background-color: #f3f3f3;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Todo = ({ todoList, setTodoList }) => {
  return (
    <>
      <TodoMain>
        <TodoInput todoList={todoList} setTodoList={setTodoList}></TodoInput>
        <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
      </TodoMain>
    </>
  );
};

export default Todo;
