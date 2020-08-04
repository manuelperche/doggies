import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div className="container">
      <div className="title">
        <h1 className="h1-heading">Doggies</h1>
      </div>
      <form className="form">
        <input class="form-input" type="text" placeholder="Search doggies" value={props.inputValue} onChange={e => props.setInputValue(e.target.value)}/>
      </form>
    </div>
  );
};

export default Header;
