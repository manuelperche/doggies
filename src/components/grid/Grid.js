import React, { useState, useEffect } from 'react';
import './Grid.css';
import http from '../../utils/api';
import Loader from 'react-loader-spinner';
import Dog from './Dog';

const Grid = ({ inputValue }) => {
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

  return (
    <div className="grid-container">
      {isLoading ? (
        <Loader type="TailSpin" />
      ) : (
        <div className="grid">
          {
            images.map((image, index) => {
              return (
                <Dog key={index} image={image}/>
              )
            })
          }
        </div>
      )}
    </div>
  );
};

export default Grid;
