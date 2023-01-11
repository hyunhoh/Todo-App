import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
          <NavLink to="/todo">
            <span>Todo</span>
          </NavLink>
        </nav>
      </HeaderContainer>
    </>
  );
};

export default Header;
