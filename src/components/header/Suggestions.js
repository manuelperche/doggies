import React from 'react';
import './Header.css';

const Suggestions = ({ searchResults, setInputValue, setShowSearch }) => {
  const handleDogClick = (dog) => {
    setInputValue(dog);
    setShowSearch(false);
  };

  return (
    <div className="results">
      {searchResults.map((result, index) => {
        if (index < 4) {
          return (
            <div
              className="result-container"
              key={index}
              onClick={() => handleDogClick(result)}
            >
              <h3> {result} </h3>
            </div>
          );
        } else {
          return null
        }
      })}
    </div>
  );
};

export default Suggestions;
