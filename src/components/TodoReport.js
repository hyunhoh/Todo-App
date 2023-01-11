import styled from 'styled-components';

const ReportContainer = styled.section`
  background-color: aquamarine;
`;

const TodoReport = ({ todoList }) => {
  const checkedRate = Math.round(
    (todoList.filter(ele => ele.isChecked).length / todoList.length) * 100,
  );

  return (
    <ReportContainer>
      <span>{`${checkedRate}%`}</span>
    </ReportContainer>
  );
};

export default TodoReport;
