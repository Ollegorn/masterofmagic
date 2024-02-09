import Challenge from "./Challenge";
import Title from "./Title";
import Slider from "./Slider";
import { usePopup } from "../hooks/usePopup";
import { useState } from "react";
import Popup from "./Popup";
import ConfirmationMessage from "./ConfirmationMessage";
import DuelSubmitResults from "./DuelSubmitResults";
import useInvitations from "../hooks/useInvitations";

function ChallengesScheduled({ receivedInvitations, sentInvitations, userId }) {
  const receivedAcceptedInvitations = receivedInvitations ? receivedInvitations.filter(inv => inv.isAccepted || inv.isDeclined) : [];
  const sentAcceptedInvitations = sentInvitations ? sentInvitations.filter(inv => inv.isAccepted || inv.isDeclined) : [];
  const allAcceptedInvitations = [...receivedAcceptedInvitations, ...sentAcceptedInvitations];
  const [popupContent, setPopupContent] = useState(null);
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const [selectedInv, setSelectedInv] = useState(null);
  const { cancelInvitation } = useInvitations();

  const handleCancelClick = (inv) => {
    setSelectedInv(inv);
    openPopup();
    setPopupContent("cancel");
  }

  const handleSubmitClick = (invitation) => {
    setSelectedInv(invitation);
    openPopup();
    setPopupContent("submitResults");
  }

  const handleCancelInvitation = () => {
    if (selectedInv){
      cancelInvitation(selectedInv.id);
      closePopup();
    }
  }

  return (
    <>
      <div className="flex flex-col lg:gap-6">
        <Title>Your Next Matches</Title>
        {allAcceptedInvitations.length > 0 ? (
          <Slider>
            {allAcceptedInvitations.map((invitation) => {
              return (
                <Challenge
                  key={invitation.id}
                  username={invitation.recipient.id === userId ? invitation.sender.userName : invitation.recipient.userName}
                  imageNumber={invitation.recipient.id === userId ? invitation.sender.imageNumber : invitation.recipient.imageNumber}
                  message={invitation.message}
                  dateTime={invitation.dateTime}
                  isDeclined={invitation.isDeclined}
                  onClickCancel={() => handleCancelClick(invitation)}
                  onClickSubmit={() => handleSubmitClick(invitation)}
                />
              );
            })}
          </Slider>
        ) : (
          <p className="font-body text-sm  mt-2 mb-4 text-neutral-400">Nothing here yet.</p>
        )}
      </div>
      {popupContent === "cancel" && (
        <Popup show={isPopupOpen} onClose={closePopup}>
          <ConfirmationMessage 
            label="Cancel Invitation"
            description="Are you sure you want to cancel the scheduled invitation? Your opponent will not receive a notification but you can create a new invitation with better suiting date and time."
            buttonText="Delete"
            onCancel={closePopup}
            onConfirm={handleCancelInvitation}
          />
        </Popup>
      )}
      {popupContent === "submitResults" &&(
        <Popup show={isPopupOpen} onClose={closePopup}>
           <DuelSubmitResults invitation={selectedInv} onCancel={closePopup} />
        </Popup>
      )}
    </>
  );
}

export default ChallengesScheduled;
