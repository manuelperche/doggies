import React from 'react';
import './Header.css';

const Suggestions = ({ searchResults, setInputValue }) => {
    const handleClick = (dog) => {
        setInputValue(dog)
    } 

    return (
        <div className="results">
            {
                searchResults.map((result, index) => {
                    return (
                        <div key={index}>
                            <button> {result} </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Suggestions
