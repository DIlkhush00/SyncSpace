// HeaderUpper.js
import React from 'react';

const Header_Upper = () => {
  // Replace 'url-to-image' with the actual URL of your image
  const imageUrl = './src/assets/image/anime_background.jpg';

  return (
    <div className="w-full h-[19.1875rem]">
      <img src={imageUrl} alt="Header Image" className="mx-auto h-full w-full object-cover"/>
    </div>
  );
};


export default Header_Upper
