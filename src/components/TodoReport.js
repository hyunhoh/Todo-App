import styled from 'styled-components';

const ReportContainer = styled.section`
  background-color: transparent;
  width: 80%;
  height: 5%;
  border-radius: 50px;
  margin-bottom: 10px;
  border: 2px;
  border-style: solid;
`;

const ProgressBar = styled.div`
  background-color: red;
  height: 100%;
  width: ${props => props.checkedRate}%;
  border-radius: 50px;
  transition: 0.5s;
`;

const TodoReport = ({ checkedRate }) => {
  return (
    <ReportContainer>
      {/* {Number.isNaN(checkedRate) ? `Empty task` : `${checkedRate}%`} */}
      <ProgressBar checkedRate={checkedRate}></ProgressBar>
    </ReportContainer>
  );
};

export default TodoReport;
