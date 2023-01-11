import styled from 'styled-components';
import TodoItem from '../components/TodoItem';

const ListContainer = styled.ul`
  background-color: beige;
  width: 90%;
  height: 80%;
  border-radius: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0 10px 0;
  overflow: auto;
`;

const TodoList = ({ todoList, setTodoList }) => {
  const handleRemove = id => {
    setTodoList(todoList.filter(ele => ele.id !== id));
  };

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
      <ListContainer>
        {todoList.map(ele => (
          <TodoItem
            key={ele.id}
            todoItem={ele}
            handleRemove={handleRemove}
            handleChecked={handleChecked}></TodoItem>
        ))}
      </ListContainer>
    </>
  );
};

export default TodoList;
