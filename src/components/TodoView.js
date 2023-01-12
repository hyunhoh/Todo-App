import styled from 'styled-components';
import TodoViewItem from './TodoViewItem';

const ViewContainer = styled.section`
  background-color: transparent;
  width: 80%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const TodoView = ({ todoList, setTodoList }) => {
  const overViewList = todoList.filter(ele => !ele.isChecked).slice(0, 4);

  const handleChecked = id => {
    const selectedItem = todoList.filter(ele => ele.id === id)[0];
    const restItems = todoList.filter(ele => ele.id !== id);
    selectedItem.isChecked = !selectedItem.isChecked;

    selectedItem.isChecked
      ? setTodoList([...restItems, selectedItem])
      : setTodoList([selectedItem, ...restItems]);
  };

  return (
    <>
      <ViewContainer>
        {overViewList.map(ele => (
          <TodoViewItem
            key={ele.id}
            todoViewItem={ele}
            handleChecked={handleChecked}></TodoViewItem>
        ))}
      </ViewContainer>
    </>
  );
};

export default TodoView;
