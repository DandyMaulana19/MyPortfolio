import "../App.css";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDarkMode }) => {
  return (
    <>
      <div
        className="nav justify-content-center d-flex position-fixed overflow-x-hidden"
        id="navbar"
        style={{ fontSize: 16 }}
      >
        <li className="nav-item">
          <Link className="nav-link text-black " aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-black " to="/About">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-black " to="/Project">
            Project
          </Link>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="nav-link text-black"
            onClick={toggleDarkMode}
          >
            Theme
          </button>
        </li>
      </div>
    </>
  );
};

export default Navbar;
