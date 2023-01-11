import styled from 'styled-components';
import TodoReport from '../components/TodoReport';
import TodoView from '../components/TodoView';

const HomeMain = styled.main`
  background-color: #f3f3f3;
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  > article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: brown;
    width: 60%;
    height: 80%;
    border-radius: 50px;
  }
`;

const Home = ({ todoList, setTodoList }) => {
  return (
    <>
      <HomeMain>
        <article>
          <TodoReport todoList={todoList}></TodoReport>
          <TodoView todoList={todoList} setTodoList={setTodoList}></TodoView>
        </article>
      </HomeMain>
    </>
  );
};

export default Home;
