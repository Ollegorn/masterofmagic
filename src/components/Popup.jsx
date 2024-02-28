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
    //Scrim
    <div
      className={`fixed inset-0 z-50 items-center justify-center rounded-3xl bg-Neutral-900/60 
      ${show ? "flex" : "pointer-events-none hidden"}`}
    >
      <div
        className="relative max-w-180 z-50 flex flex-col rounded-lg border border-Neutral-700 bg-gradient-to-b from-Neutral-900/30 to-Neutral-900/75 p-6 text-center text-Neutral-50 shadow-2xl backdrop-blur-lg lg:w-2/5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 inline-flex cursor-pointer items-center justify-center rounded-lg px-3 text-4xl text-Neutral-100 transition-all duration-300 focus:outline-Neutral-400"
          onClick={handleClose}
        >
          &times;
        </button>
        <div className={"w-full items-center justify-center self-center"}>
          <div className="flex min-w-72 max-w-180 flex-col items-center justify-center lg:px-6">
            <h2 className="inline-block bg-gradient-to-r from-primary04-500 to-primary04-50 bg-clip-text font-display text-3xl text-transparent md:text-4xl lg:text-5xl xl:text-6xl">
              {title}
            </h2>
            {React.Children.map(children, (child) =>
              React.cloneElement(child, { onClose }),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
