import React from 'react';
import './Grid.css';

const Dog = ({ image }) => {
  return (
    <div className="dog-card">
      <img alt='' src={image} />
    </div>
  );
};

export default Dog;
