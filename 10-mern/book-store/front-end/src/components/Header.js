import React from "react";
import { FaBook } from "react-icons/fa";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>
          <FaBook />
        </h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/add">Add Book</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
