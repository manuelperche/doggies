import React, { useState, useEffect } from 'react';
import './Header.css';
import http from '../../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Suggestions from './Suggestions';

const Header = ({ inputValue, setInputValue, searchDogs }) => {
  const [dogBreeds, setDogBreeds] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    (async () => {
      const {
        data: { message },
      } = await http('/breeds/list/all');
      const list = Object.keys(message).map((name) => {
        return name.charAt(0).toLocaleUpperCase() + name.slice(1);
      });
      setDogBreeds(list);
    })();
  }, []);

  const searchDogBreeds = (searchText) => {
    setInputValue(searchText);
    setShowSearch(true);

    let matches = dogBreeds.filter((dogBreed) => {
      const regex = new RegExp(`${searchText}`, 'gi');
      return dogBreed.match(regex);
    });

    if (searchText.length === 0) {
      matches = [];
      setShowSearch(false);
    }

    if (matches.length === 0) {
      setShowSearch(false);
    }

    setSearchResults(matches);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSearch(false);
    searchDogs(inputValue);
  };

  return (
    <div className="header-container">
      <div className="title">
        <h1 className="h1-heading">Doggies</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Search doggies"
          value={inputValue}
          onChange={(e) => searchDogBreeds(e.target.value)}
        />
        <button className="submit" type="submit">
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </button>
      </form>
      {showSearch ? (
        <Suggestions
          searchResults={searchResults}
          setInputValue={setInputValue}
          setShowSearch={setShowSearch}
        />
      ) : null}
    </div>
  );
};

export default Header;
