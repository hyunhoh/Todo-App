import { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  background-color: aqua;
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
  };

  return (
    <>
      <InputContainer>
        <input
          type="text"
          onChange={handleInputValue}
          onKeyUp={e => (e.key === 'Enter' ? handleRegister() : null)}></input>
      </InputContainer>
    </>
  );
};

export default TodoInput;
