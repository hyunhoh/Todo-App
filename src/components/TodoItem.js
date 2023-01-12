import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faXmark,
  faMinus,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';

const ItemContainer = styled.li`
  background-color: transparent;
  width: 90%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  margin: 5px 0 5px 0;
  font-size: 1.5rem;
  padding: 0 10px 0 10px;
  border: 2px;
  border-style: solid;

  > span {
    margin: 10px;
  }

  > .check,
  .edit,
  .remove:hover {
    cursor: pointer;
  }

  .faCheck {
    color: lightgreen;
  }

  .faXmark {
    color: red;
  }

  > .content {
    flex-grow: 1;
  }
`;

const TodoItem = ({ todoItem, handleRemove, handleChecked }) => {
  const { id, content, isChecked } = todoItem;

  return (
    <>
      <ItemContainer>
        <span className="check" onClick={() => handleChecked(id)}>
          {isChecked ? (
            <FontAwesomeIcon icon={faCheck} className="faCheck" />
          ) : (
            <FontAwesomeIcon icon={faXmark} className="faXmark" />
          )}
        </span>
        <span className="content">{content}</span>
        <span className="edit">
          <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
        </span>
        <span className="remove" onClick={() => handleRemove(id)}>
          <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
        </span>
      </ItemContainer>
    </>
  );
};

export default TodoItem;
