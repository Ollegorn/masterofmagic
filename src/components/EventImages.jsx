import React, { useState } from 'react';

// Array of image paths
const imagePaths = [
  'event_01.jpg',
  'event_02.jpg',
  'event_03.jpg',
  'event_04.jpg',
  'event_05.jpg',
  'event_06.jpeg',
  'event_07.jpg',
  'event_08.jpg',
  'event_09.jpg',
  'event_10.jpg',
];

function EventImages() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (index) => {
    setSelectedImage((prevSelected) => (prevSelected === index ? null : index));
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {imagePaths.map((path, index) => (
        <div
          key={index}
          className={`relative`}
          onClick={() => handleClick(index)}
        >
          <img
            src={`./${path}`}
            alt={`Event ${index + 1}`}
            className={`w-full h-auto rounded-lg object-cover cursor-pointer ${
              selectedImage === index ? 'brightness-100' : 'brightness-50 hover:brightness-100'
            }`}
          />
          {selectedImage !== null && selectedImage === index && (
            <div className="absolute inset-0 rounded-lg border-2"></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default EventImages;
