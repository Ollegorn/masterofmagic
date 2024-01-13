import React, { useEffect } from "react";

function Popup({ title, show, onClose, children }) {

  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [show]);

  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center rounded-3xl
      ${show ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <div
        className="fixed inset-0 bg-Neutral-900/60"
        onClick={handleClose}
      ></div>
      <div
        className="relative rounded-lg border border-Neutral-700 bg-gradient-to-b from-Neutral-900/30 to-Neutral-900/75 p-6 text-center text-Neutral-50 shadow-2xl backdrop-blur-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 inline-flex cursor-pointer items-center justify-center rounded-lg px-3 text-4xl text-Neutral-100 transition-all duration-300 focus:outline-Neutral-400"
          onClick={handleClose}
        >
          &times;
        </button>
        <div className={"text-container"}>
          <div className="flex min-w-72 max-w-180 items-center justify-center">
            <h2 className="inline-block bg-gradient-to-r from-primary04-500 to-primary04-50 bg-clip-text font-display text-5xl text-transparent">
              {title}
            </h2>
          </div>
          <div className="flex-auto">
            {React.Children.map(children, (child) =>
              React.cloneElement(child, {onClose}),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
