import { useState } from 'react';

export function usePopup() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const togglePopup = () => {
    setPopupOpen((prev) => !prev);
  };

  return {
    isPopupOpen,
    openPopup,
    closePopup,
    togglePopup,
  };
};

