import { useState } from "react";
import Title from "./Title";
import Challenge from "./Challenge";
import Slider from "./Slider";
import Popup from "./Popup";
import { usePopup } from "../hooks/usePopup";
import ChallengeRequest from "./ChallengeRequest";
import DuelSubmitResults from "./DuelSubmitResults";

function UnchallengedOpponents({ unplayedDuels, tournamentId, }) {
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const [selectedDuel, setSelectedDuel] = useState(null);
  const [popupContent, setPopupContent] = useState(null);
  console.log(unplayedDuels);
  const handleChallengeClick = (duel) => {
    setSelectedDuel(duel);
    openPopup();
    setPopupContent("challenge");
  };

  const handleSubmitClick = (duel) => {
    setSelectedDuel(duel);
    openPopup();
    setPopupContent("submitResults");
  }
  
  return (
    <>
      <div className="flex flex-col lg:gap-6">
        <Title>Unchallenged Opponents</Title>
        {unplayedDuels.length > 0 ?(
          <Slider>
            {unplayedDuels.map((duel) => (
              <Challenge 
                key={duel.duelId}
                isUnchallenged
                username={duel.userTwo.userName}
                imageNumber={duel.userTwo.imageNumber}
                onClickChallenge={() => handleChallengeClick(duel)}
                onClickSubmit={() => handleSubmitClick(duel)}
                isChallenged={duel.isChallenged}
              />
            ))}
          </Slider>
        ):(
          <p className="font-body text-sm mt-2 mb-4 text-neutral-400">You have played all your duels!</p>
        )}
        {popupContent === "challenge" &&(
          <Popup show={isPopupOpen} onClose={closePopup}>
            {selectedDuel && <ChallengeRequest duel={selectedDuel} onCancel={closePopup} tournamentId={tournamentId} />}
        </Popup>
        )}
        
        {popupContent === "submitResults" &&(
          <Popup show={isPopupOpen} onClose={closePopup}>
            {selectedDuel && <DuelSubmitResults duel={selectedDuel} onCancel={closePopup} />}
        </Popup>
        )}
      </div>
    </>
  );
}

export default UnchallengedOpponents;
