import React from 'react';
import './Header.css';

const Header = ({ inputValue, setInputValue }) => {
  return (
    <div className="container">
      <div className="title">
        <h1 className="h1-heading">Doggies</h1>
      </div>
      <form className="form">
        <input className="form-input" type="text" placeholder="Search doggies" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
      </form>
    </div>
  );
};

export default Header;
