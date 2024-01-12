import React, { useState, useEffect } from "react";

function Popup({ title, show, onClose, children }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    // Add or remove 'overflow-hidden' class based on the 'show' state
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup the effect
    return () => {
      document.body.classList.remove("overflow-hidden");
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
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center rounded-3xl ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className="fixed inset-0 bg-Neutral-900/60"
        onClick={handleClose}
      ></div>
      <div
        className="relative rounded-lg border border-Neutral-700 bg-gradient-to-b from-Neutral-900/50 to-Neutral-900/75 p-6 text-center text-white shadow-2xl backdrop-blur-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-0 cursor-pointer border-none bg-none text-6xl text-gray-500"
          onClick={handleClose}
        >
          &times;
        </button>
        <div className={`text-container ${flipped ? "rotate-y-360" : ""}`}>
          <div className="flex min-w-72 max-w-180 items-center justify-center">
            <h2 className="inline-block bg-gradient-to-r from-primary04-500 to-primary04-50 bg-clip-text font-display text-5xl text-transparent ">
              {title}
            </h2>
          </div>
          <div className="flex-auto">
            {React.Children.map(children, (child) =>
              React.cloneElement(child, {
                onButtonClick: handleButtonClick,
                onClose,
                isFlipped: flipped,
              }),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
