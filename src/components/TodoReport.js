import styled from 'styled-components';

const ReportContainer = styled.section`
  background-color: aquamarine;
  width: 80%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-bottom: 10px;
`;

const TodoReport = ({ todoList }) => {
  const checkedRate = Math.round(
    (todoList.filter(ele => ele.isChecked).length / todoList.length) * 100,
  );

  return (
    <ReportContainer>
      {Number.isNaN(checkedRate) ? (
        <span>No Todo</span>
      ) : (
        <span>{`${checkedRate}%`}</span>
      )}
    </ReportContainer>
  );
};

export default TodoReport;
