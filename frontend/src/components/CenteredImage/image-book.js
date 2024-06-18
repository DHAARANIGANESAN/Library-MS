import React from 'react';
import './FullWidthImage.css'; // Import the CSS file

const FullWidthImage = () => {
  return (
    <div className="full-width-container">
      <img
        src="https://images.pexels.com/photos/2946979/pexels-photo-2946979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="full-width-image"
      />
    </div>
  );
};

export default FullWidthImage;
