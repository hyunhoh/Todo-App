import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: aliceblue;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;

  > span,
  nav {
    margin: 2rem;
  }

  a {
    text-decoration: none;
    margin: 0.5rem;
  }
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
