import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: aliceblue;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <span>Todo App</span>
        <nav>
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/todo">
            <span>Todo</span>
          </Link>
        </nav>
      </HeaderContainer>
    </>
  );
};

export default Header;
