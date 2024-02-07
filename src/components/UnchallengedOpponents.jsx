import { useState } from "react";
import Title from "./Title";
import Challenge from "./Challenge";
import Slider from "./Slider";
import Popup from "./Popup";
import { usePopup } from "../hooks/usePopup";
import ChallengeRequest from "./ChallengeRequest";

function UnchallengedOpponents({ unplayedDuels, tournamentId }) {
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const [selectedDuel, setSelectedDuel] = useState(null);

  const handleChallengeClick = (duel) => {
    setSelectedDuel(duel);
    openPopup();
  };
  
  return (
    <>
      <div className="flex flex-col lg:gap-6">
        <Title>Unchallenged Opponents</Title>
        <Slider>
          {unplayedDuels.map((duel) => (
            <Challenge 
              key={duel.duelId}
              isUnchallenged
              username={duel.userTwo.userName}
              imageNumber={duel.userTwo.imageNumber}
              onClickChallenge={() => handleChallengeClick(duel)}
            />
          ))}
        </Slider>

        <Popup show={isPopupOpen} onClose={closePopup}>
            {selectedDuel && <ChallengeRequest duel={selectedDuel} onCancel={closePopup} tournamentId={tournamentId} />}
        </Popup>
      </div>
    </>
  );
}

export default UnchallengedOpponents;
