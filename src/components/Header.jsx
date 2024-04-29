import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h1>Tuomas K. React demo</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/persons">Persons</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
