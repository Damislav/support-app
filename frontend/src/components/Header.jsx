import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Support Desk</Link>
      </div>{" "}
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt />
            Login
          </Link>
        </li>{" "}
        <li>
          <Link to="/register">
            {" "}
            <FaUserAlt />
            Register
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
