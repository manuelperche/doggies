import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../header/Header';
import Grid from '../grid/Grid';
import http from '../../utils/api';


const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const {
        data: { message },
      } = await http('/breeds/image/random/25');
      setImages(message);
      setIsLoading(false);
    };
    fetchImages();
  }, []);

  const searchDogs = async () => {
    setIsLoading(true);
    const query = inputValue.toLowerCase();
    const {
      data: { message },
    } = await http(`/breed/${query}/images/random/25`);
    setImages(message);
    setIsLoading(false);
  };


  return (
    <div className="app">
      <Header inputValue={inputValue} setInputValue={setInputValue} searchDogs={searchDogs}/>
      <Grid images={images} isLoading={isLoading} />
    </div>
  );
}

export default App;
