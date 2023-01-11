import styled from 'styled-components';
import TodoReport from '../components/TodoReport';
import TodoView from '../components/TodoView';

const HomeMain = styled.main`
  background-color: #f3f3f3;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = ({ todoList }) => {
  return (
    <>
      <HomeMain>
        <TodoReport todoList={todoList}></TodoReport>
        <TodoView todoList={todoList}></TodoView>
      </HomeMain>
    </>
  );
};

export default Home;
