import styled from 'styled-components';

const ViewItemContainer = styled.div`
  background-color: cadetblue;
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
