import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <ul>
      <li>
        <Link exact to="/">
          Home
        </Link>
      </li>
      <li>
        <Link exact to="/history">
          History
        </Link>
      </li>
      <li>
        <Link exact to="/results">
          Results
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
