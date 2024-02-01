import React, { useState } from 'react';
import Button from './Button';

function ConfirmationMessage({ label, description, buttonText, children, onCancel, onConfirm }) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleCancel = () => {
    setIsConfirmed(false);
    if (onCancel) {
      onCancel();
    }
  };

  const handleMainAction = () => {
    setIsConfirmed(true);
    if (onConfirm) {
      onConfirm();
    }
  };

  return (
    <div className="flex w-80 sm:w-96 items-center gap-4 rounded-3xl">
      <div className="flex flex-col p-8 items-center gap-4 self-stretch">
        <p className="font-body font-bold text-2xl">{label}</p>
        <div className="w-full">{children}</div>
        <p className="font-body text-sm font-normal text-Neutral-100 py-4 md:py-8 md:text-lg lg:text-xl xl:text-xl">{description}</p>

        <Button variant="secondary" className="w-full h-14" onClick={handleCancel}>
          Cancel
        </Button>
        <Button className="w-full h-14" onClick={handleMainAction} disabled={isConfirmed}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default ConfirmationMessage;


/* DELETE TOURNAMENT

<Popup show={isPopupOpen} onClose={closePopupAndResetContent}>
          <ConfirmationMessage label="Delete the tournament" description="This is an ongoing tournament, deleting it will erase all the duel scores and all progress will be lost. This cannot be undone." buttonText="Delete Tournament" />
</Popup> 
*/

/* CANCEL PARTICIPATION
<Popup show={isPopupOpen} onClose={closePopupAndResetContent}>
          <ConfirmationMessage label="Cancel Participation" description="This is an ongoing tournament, if you cancel your participation, all your unfought duels will be forfeit, your opponents will be declared the winners and gain all points. This cannot be undone." buttonText="Cancel Participation" />
</Popup>
 */