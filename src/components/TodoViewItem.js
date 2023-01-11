import styled from 'styled-components';

const ViewItemContainer = styled.div`
  background-color: cadetblue;
`;

const TodoViewItem = ({ todoViewItem }) => {
  return (
    <>
      <ViewItemContainer>
        <span>{todoViewItem.content}</span>
      </ViewItemContainer>
    </>
  );
};

export default TodoViewItem;
