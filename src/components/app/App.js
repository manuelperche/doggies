import React, { useState } from 'react';
import './App.css';
import Header from '../header/Header';
import Grid from '../grid/Grid';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="app">
      <Header inputValue={inputValue} setInputValue={setInputValue}/>
      <Grid />
    </div>
  );
}

export default App;
