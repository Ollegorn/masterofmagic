import React, { useEffect } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const FullscreenModal = ({ title, onClose, show, children }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [show]);

  return (
    <>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
          <div className="bg-black text-white p-8 rounded-lg w-full h-full overflow-y-auto relative">
            <div className="flex items-center mb-6">

              <div className="text-3xl cursor-pointer  pt-1.5" onClick={onClose}>
                <ArrowLeftIcon className="h-8 w-8"/>
              </div>
              <h2 className="text-3xl text-center font-bold flex-grow">{title}</h2>
            </div>
            <div className="h-px w-full rounded bg-gradient-to-r from-primary04-500 to-primary04-100"></div>

            <div className="overflow-y-auto">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default FullscreenModal;
