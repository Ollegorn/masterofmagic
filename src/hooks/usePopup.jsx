import { useState } from 'react';

export function usePopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  return {
    isPopupOpen,
    openPopup,
    closePopup,
    togglePopup,
  };
};

export function useFullscreenModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  }

  return {
    isModalOpen, 
    openModal, 
    closeModal, 
    toggleModal,
  };
};

