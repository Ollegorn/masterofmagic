import React, { useState, useEffect } from "react";

const NotificationPopup = ({ message, variant, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed top-16 sm:top-20 md:top-24 lg:top-28 right-1 w-80 p-4 rounded-xl z-50 border-solid border-2 border-black text-Neutral-50 ${
        variant === "success"
          ? "bg-green-500"
          : variant === "error"
          ? "bg-red-500"
          : "bg-blue-500"
      } ${isVisible ? "block" : "hidden"} transition duration-300`}
      onClick={handleClose}
    >
      {message}
    </div>
  );
};

export default NotificationPopup;
