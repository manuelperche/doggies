import React, { useState, useEffect } from 'react';
import './Header.css';
import http from '../../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Suggestions from './Suggestions';

const Header = ({ inputValue, setInputValue }) => {  
  const [dogBreeds, setDogBreeds] = useState([]);
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    (async () => {
        const { data: { message } }  = await http('/breeds/list/all');
        const list = Object.keys(message)
        setDogBreeds(list)
    })()
  }, []);

  const searchDogBreeds = (searchText) => {
    setInputValue(searchText)

    let matches = dogBreeds.filter(dogBreed => {
      const regex = new RegExp(`${searchText}`, 'gi');
      return dogBreed.match(regex);
    });

    if (searchText.length === 0) {
      matches = []
    }

    setSearchResults(matches)
  }

  const handleSubmit = () => {

  }

  return (
    <div className="container">
      <div className="title">
        <h1 className="h1-heading">Doggies</h1>
      </div>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input className="form-input" type="text" placeholder="Search doggies" value={inputValue} onChange={e => searchDogBreeds(e.target.value)}/>
        <button className="submit" type="submit"><FontAwesomeIcon icon={faSearch} className="icon" /></button>
      </form>
      <Suggestions searchResults={searchResults} />
    </div>
  );
};

export default Header;
