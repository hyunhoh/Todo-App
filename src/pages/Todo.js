import styled from 'styled-components';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

const TodoMain = styled.main`
  background-color: #f3f3f3;
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  > article {
    background-color: blanchedalmond;
    width: 60%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 50px;
  }
`;

const Todo = ({ todoList, setTodoList }) => {
  return (
    <>
      <TodoMain>
        <article>
          <TodoInput todoList={todoList} setTodoList={setTodoList}></TodoInput>
          <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
        </article>
      </TodoMain>
    </>
  );
};

export default Todo;
