import { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.section`
  background-color: aqua;
  width: 90%;
  height: 7%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const TodoInput = ({ todoList, setTodoList }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = e => {
    setInputValue(e.target.value);
  };

  const createTodoItem = inputValue => {
    return {
      id: new Date().toLocaleString(),
      content: inputValue,
      isChecked: false,
    };
  };

  const handleRegister = () => {
    setTodoList([createTodoItem(inputValue), ...todoList]);
    setInputValue('');
  };

  return (
    <>
      <InputContainer>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputValue}
          onKeyUp={e =>
            e.key === 'Enter' && inputValue !== '' ? handleRegister() : null
          }></input>
      </InputContainer>
    </>
  );
};

export default TodoInput;
