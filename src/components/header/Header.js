import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="container">
      <div className="title">
        <h1 className="h1-heading">Doggies</h1>
      </div>
      <form className="form">
        <input class="form-input" type="text" placeholder="Search doggies"/>
      </form>
    </div>
  );
};

export default Header;
