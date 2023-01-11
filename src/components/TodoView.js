import styled from 'styled-components';
import TodoViewItem from './TodoViewItem';

const ViewContainer = styled.section`
  background-color: blueviolet;
`;

const TodoView = ({ todoList }) => {
  const OverViewList = todoList.filter(ele => !ele.isChecked).slice(0, 4);

  return (
    <>
      <ViewContainer>
        {OverViewList.map(ele => (
          <TodoViewItem key={ele.id} todoViewItem={ele}></TodoViewItem>
        ))}
      </ViewContainer>
    </>
  );
};

export default TodoView;
