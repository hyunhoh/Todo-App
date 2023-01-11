import styled from 'styled-components';

const ViewItemContainer = styled.div`
  background-color: cadetblue;
  width: 35%;
  height: 35%;
  border-radius: 20px;
  margin: 10px;
`;

const TodoViewItem = ({ todoViewItem, handleChecked }) => {
  const { id, content } = todoViewItem;

  return (
    <>
      <ViewItemContainer>
        <span>{content}</span>
        <span onClick={() => handleChecked(id)}>x</span>
      </ViewItemContainer>
    </>
  );
};

export default TodoViewItem;
