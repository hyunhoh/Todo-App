import styled from 'styled-components';

const ReportContainer = styled.section`
  background-color: transparent;
  width: 80%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.2rem;

  > span {
    margin-top: 5px;
  }
`;

const ProgressContainer = styled.div`
  background-color: transparent;
  width: 90%;
  height: 50%;
  border-radius: 50px;
  border: 2px;
  border-style: solid;
`;

const ProgressBar = styled.div`
  background-color: darkgray;
  height: 100%;
  width: ${props => props.checkedRate}%;
  border-radius: 50px;
  transition: 0.5s;
`;

const TodoReport = ({ checkedRate, checkedList, todoList }) => {
  return (
    <>
      <ReportContainer>
        {Number.isNaN(checkedRate) ? (
          'No task'
        ) : (
          <>
            <ProgressContainer>
              <ProgressBar checkedRate={checkedRate}></ProgressBar>
            </ProgressContainer>
            <span>{`${checkedRate}% ${checkedList.length} / ${todoList.length}`}</span>
          </>
        )}
      </ReportContainer>
    </>
  );
};

export default TodoReport;
