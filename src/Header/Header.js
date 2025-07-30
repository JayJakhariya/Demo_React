import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <nav className="header-nav">
    <ul style={{ display: 'flex', justifyContent: 'space-between', listStyleType: 'none', padding: 0 }}>
      <div style={{display: 'flex', gap: '20px'}}>
      <li>
        <Link to="/customer">Customer</Link>
      </li>
      <li>
        <Link to="/product">Product</Link>
      </li>
      </div>
      <div>
      <li>
        <Link to="/">Logout</Link>
      </li>
      </div>
    </ul>
  </nav>
);

export default Header;
