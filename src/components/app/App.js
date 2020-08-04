import React, { useState } from 'react';
import './App.css';
import Header from '../header/Header';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="app">
      <Header inputValue={inputValue} setInputValue={setInputValue}/>
    </div>
  );
}

export default App;
