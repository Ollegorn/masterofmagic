import Title from "./Title";
import Slider from "./Slider";
import Challenge from "./Challenge";
import { usePopup } from "../hooks/usePopup";
import { useState, useEffect } from "react";
import Popup from "./Popup";
import ConfirmationMessage from "./ConfirmationMessage";
import useInvitations from "../hooks/useInvitations";
import ChallengeReturn from "./ChallengeReturn";

function ChallengesReceived({ receivedInvitations, onClick }) {
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const [selectedInv, setSelectedInv] = useState(null);
  const { acceptInvitation } = useInvitations();
  const [popupContent, setPopupContent] = useState(null);
  const [pendingReceivedInvitations, setPendingReceivedInvitations] = useState([]);

  useEffect(() => {
    if (receivedInvitations) {
      const filteredInvitations = receivedInvitations.filter(inv => !inv.isAccepted);
      setPendingReceivedInvitations(filteredInvitations);
    }
  }, [receivedInvitations]);

  const handleCheckClick = (inv) => {
    setSelectedInv(inv);
    openPopup();
    setPopupContent("accept");
  }

  const handleCancelClick = (inv) => {
    setSelectedInv(inv);
    openPopup();
    setPopupContent("cancel");
  }

  const handleConfirmation = async () => {
    if (selectedInv){
      await acceptInvitation(selectedInv.id);
      closePopup();
      onClick();
    }
  }

  const handleReschedule = (inv) => {
    setSelectedInv(inv);
    openPopup();
    setPopupContent("challenge");
  }

  return (
    <>
      <div className="flex flex-col  lg:gap-6">
        <Title>Incoming Challenges</Title>
        {pendingReceivedInvitations.length > 0 ? (
          <Slider>
            {pendingReceivedInvitations.map((inv) => (
              <Challenge 
                key={inv.id}
                isOpen
                username={inv.sender.userName}
                imageNumber={inv.sender.imageNumber}
                message={inv.message}
                dateTime={inv.dateTime}
                onClickSubmit={() => handleCheckClick(inv)}
                onClickCancel={() => handleCancelClick(inv)}
              />
            ))}
          </Slider>
        ) : (
          <p className="font-body mt-2 mb-4 text-sm text-neutral-400">Nothing here yet.</p>
        )}
      </div>
      {popupContent === "accept" && (
        <Popup show={isPopupOpen} onClose={closePopup}>
          <ConfirmationMessage 
            label="Accept Invitation"
            description="Are you sure you want to accept the proposed date and time?"
            buttonText="Accept"
            onCancel={closePopup}
            onConfirm={handleConfirmation}
          />
        </Popup>
      )}
      {popupContent === "cancel" && (
        <Popup show={isPopupOpen} onClose={closePopup}>
          <ConfirmationMessage 
            label="Reschedule Invitation"
            description="You cannot decline the invitation but you can suggest a new Date and Time that works better for you."
            buttonText="Reschedule"
            onCancel={closePopup}
            onConfirm={() => handleReschedule(selectedInv)}
          />
        </Popup>
      )}
      {popupContent === "challenge" && (
        <Popup show={isPopupOpen} onClose={closePopup}>
          <ChallengeReturn  onCancel={closePopup} invitation={selectedInv} handleHelper={onClick}/>
        </Popup>
      )}
    </>
  )
}

export default ChallengesReceived;
