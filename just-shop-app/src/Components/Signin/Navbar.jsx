import React from 'react';
import './signin.css';
import InputField from '../TextInputField/InputField';

const Navbar = () => (
  <>
    <div className="header">
      <header>JUST-SHOP</header>
      <InputField
        type="text"
        placeholder="Search..."
      />
    </div>
    <div>
      <ul className="navbar-container">
        <div className="dropdown">
          <button type="button" className="dropbtn">Categories</button>
          <div className="dropdown-content">
            <a href="#home">Fashion bags</a>
            <a href="#home">Electronics</a>
            <a href="#home">Smartphone</a>
          </div>
        </div>
        <li><a href="#home">Whats new</a></li>
        <li><a href="#home">Best sales</a></li>
        <li><a href="#home">Brands</a></li>
        <li><a href="#home">Prices drop</a></li>
        <li><a href="#home">Gifts and festivals supplies</a></li>
        <li><a href="#home">Discount</a></li>
      </ul>
    </div>
  </>
);

export default Navbar;
