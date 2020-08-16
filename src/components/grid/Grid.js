import React from 'react';
import './Grid.css';
import Loader from 'react-loader-spinner';
import Dog from './Dog';

const Grid = ({ images, isLoading }) => {
  return (
    <div className="grid-container">
      {isLoading ? (
        <Loader className="loader" color="#2196F3" type="TailSpin" />
      ) : (
        <div className="grid">
          {images.map((image, index) => {
            return <Dog key={index} image={image} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Grid;
