import React, { useState, useEffect } from 'react';

function Popup({ title, show, onClose, children }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    // Add or remove 'overflow-hidden' class based on the 'show' state
    if (show) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup the effect
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [show]);

  const handleButtonClick = () => {
    setFlipped(!flipped);
  };

  const handleClose = () => {
    setFlipped(false);
    onClose();
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 rounded-3xl ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div
        className="fixed inset-0 bg-black bg-opacity-60 filter blur-md"
        onClick={handleClose}
      ></div>
      <div
        className="relative p-6 bg-gradient-to-b from-[rgba(7,7,7,0.3)] to-black rounded-lg text-white text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-4 text-6xl cursor-pointer bg-none border-none text-gray-500"
          onClick={handleClose}
        >
          &times;
        </button>
        <div className={`text-container ${flipped ? 'rotate-y-360' : ''}`}>
          <div className='flex min-w-72 max-w-180 justify-center items-center'>
            <h2 className="inline-block bg-gradient-to-r from-primary04-500 to-primary04-50 bg-clip-text font-display text-5xl text-transparent ">
              {title}
            </h2>
          </div>
          <div className="flex-auto">
            {React.Children.map(children, (child) =>
              React.cloneElement(child, { onButtonClick: handleButtonClick, onClose, isFlipped: flipped })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
