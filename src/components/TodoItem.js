import styled from 'styled-components';

const ItemContainer = styled.li`
  background-color: burlywood;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoItem = ({ todoItem, handleRemove, handleChecked }) => {
  const { id, content, isChecked } = todoItem;

  return (
    <>
      <ItemContainer>
        <span onClick={() => handleChecked(id)}>{isChecked ? 'o' : 'x'}</span>
        <span>{content}</span>
        <span>{id}</span>
        <span onClick={() => handleRemove(id)}>x</span>
      </ItemContainer>
    </>
  );
};

export default TodoItem;
