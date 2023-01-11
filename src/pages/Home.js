import styled from 'styled-components';
import TodoReport from '../components/TodoReport';
import TodoView from '../components/TodoView';

const HomeMain = styled.main`
  background-color: #333333;
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
    background-color: #f5f5f5;
    width: 60%;
    height: 80%;
    border-radius: 50px;
  }
`;

const Home = ({ todoList, setTodoList }) => {
  const checkedList = todoList.filter(ele => ele.isChecked);
  const checkedRate = Math.round((checkedList.length / todoList.length) * 100);

  return (
    <>
      <HomeMain>
        <article>
          <TodoReport
            checkedRate={checkedRate}
            checkedList={checkedList}
            todoList={todoList}></TodoReport>
          <TodoView todoList={todoList} setTodoList={setTodoList}></TodoView>
        </article>
      </HomeMain>
    </>
  );
};

export default Home;
