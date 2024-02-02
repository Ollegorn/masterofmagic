import React, { useState } from 'react';

// Array of image paths
const eventImages = [
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

const avatarImages = [
  'avatar0.svg',
  'avatar1.svg',
  'avatar2.svg',
  'avatar3.svg',
  'avatar4.svg',
  'avatar5.svg',
  'avatar6.svg',
  'avatar7.svg',
  'avatar8.svg',
  'avatar9.svg',
  'avatar10.svg',
  'avatar11.svg',
  'avatar12.svg',
  'avatar13.svg',
  'avatar14.svg',
  'avatar15.svg',
  'avatar16.svg',
  'avatar17.svg',
  'avatar18.svg',
  'avatar19.svg',
  'avatar20.svg',
  'avatar21.svg',
  'avatar22.svg',
  'avatar23.svg',
  'avatar24.svg',
  'avatar25.svg',
  'avatar26.svg',
  'avatar27.svg',
  'avatar28.svg',
  'avatar29.svg'
]

const ImagesGrid = ({ images, onSelect }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleClick = (index) => {
    setSelectedImage((prevSelected) => (prevSelected === index ? null : index));
    onSelect(index + 1);
  };

  const selectedArray = images === 'avatar' ? avatarImages : eventImages;

  return (
    <div className={`grid ${images === 'avatar' ? 'grid-cols-4 lg:grid-cols-5' : 'grid-cols-2 sm:grid-cols-3 gap-2'}  `}>
      {selectedArray.map((path, index) => (
        <div
          key={index}
          className={`relative aspect-w-1 aspect-h-1`}
          onClick={() => handleClick(index)}
        >
          <img
            src={`./${path}`}
            alt={`${images} ${index + 1}`}
            className={`rounded-lg object-cover cursor-pointer ${
              images === 'avatar' ? 'w-14 h-14 m-1' : 'w-full h-full'
            } ${selectedImage === index ? 'brightness-100' : 'brightness-50 hover:brightness-100'}`}
          />
          {selectedImage !== null && selectedImage === index && (
            <div className="absolute inset-0 rounded-lg border-2"></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ImagesGrid;
