import Title from "./Title";
import Slider from "./Slider";
import Challenge from "./Challenge";
import { usePopup } from "../hooks/usePopup";
import { useState } from "react";
import Popup from "./Popup";
import ConfirmationMessage from "./ConfirmationMessage";
import useInvitations from "../hooks/useInvitations";

function ChallengesSent({ sentInvitations }) {
  const pendingSentInvitations = sentInvitations ? sentInvitations.filter(inv => !inv.isAccepted) : [];
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const [selectedInv, setSelectedInv] = useState(null);
  const { deleteInvitation } = useInvitations();

  const handleCancelClick = (inv) => {
    setSelectedInv(inv);
    openPopup();
  }

  const handleConfirmation = () => {
    if (selectedInv) {
      deleteInvitation(selectedInv.id);
      closePopup();
    }
  }

  return (
    <>
      <div className="flex flex-col lg:gap-6">
        <Title>Awaiting Response</Title>
        {pendingSentInvitations.length > 0 ? (
          <Slider>
            {pendingSentInvitations.map((inv) => (
              <Challenge 
                key={inv.id}
                isPendingResponse
                username={inv.recipient.userName}
                imageNumber={inv.recipient.imageNumber}
                message={inv.message}
                dateTime={inv.dateTime}
                onClickCancel={() => handleCancelClick(inv)}
              />
            ))}
          </Slider>
        ) : (
          <p className="font-body text-sm mt-2 mb-4 text-neutral-400">Nothing here yet.</p>
        )}
      </div>
      <Popup show={isPopupOpen} onClose={closePopup}>
        <ConfirmationMessage 
          label="Delete Invitation"
          description="Are you sure you want to delete the current invitation? You will be able to create a new one from the beginning."
          buttonText="Delete"
          onCancel={closePopup}
          onConfirm={handleConfirmation}
        />
      </Popup>
    </>
  )
}

export default ChallengesSent; 
