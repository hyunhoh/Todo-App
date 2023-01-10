import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/todo">todo</Link>
    </nav>
  );
};

export default Nav;
