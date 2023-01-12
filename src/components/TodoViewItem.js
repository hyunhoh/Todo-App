import styled from 'styled-components';

const ViewItemContainer = styled.div`
  background-color: aliceblue;
  width: 45%;
  height: 35%;
  border-radius: 20px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border: 2px;
  border-style: solid;

  :hover {
    box-shadow: 3px 3px 4px #333333;
    cursor: pointer;
  }
`;

const TodoViewItem = ({ todoViewItem, handleChecked }) => {
  const { id, content } = todoViewItem;

  return (
    <>
      <ViewItemContainer onClick={() => handleChecked(id)}>
        <span>{content}</span>
      </ViewItemContainer>
    </>
  );
};

export default TodoViewItem;
