import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <nav className="header-nav">
    <ul>
      <li>
        <Link to="/customer">Customer</Link>
      </li>
      <li>
        <Link to="/product">Product</Link>
      </li>

      <li>
        <Link to="/project">Project</Link>
      </li>
      <li>
        <Link to="/">Logout</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
