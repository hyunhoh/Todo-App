import styled from 'styled-components';
import TodoItem from '../components/TodoItem';

const ListContainer = styled.ul`
  background-color: beige;
  width: 50%;
`;

const TodoList = ({ todoList, setTodoList }) => {
  const handleRemove = id => {
    setTodoList(todoList.filter(ele => ele.id !== id));
  };

  return (
    <>
      <ListContainer>
        {todoList.map(ele => (
          <TodoItem
            key={ele.id}
            todoItem={ele}
            handleRemove={handleRemove}></TodoItem>
        ))}
      </ListContainer>
    </>
  );
};

export default TodoList;
