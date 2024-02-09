import React, { useState } from 'react';
import ConfirmationMessage from './ConfirmationMessage';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import UserInfo from './UserInfo';
import useDuel from '../hooks/useDuel';

function DuelSubmitResults({ onCancel, duel, invitation }) {
  console.log(invitation);
  console.log(duel);
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);
  const { updateDuel, error } = useDuel();

  const handleScoreChange = (player, increment) => {
    const totalScore = scorePlayer1 + scorePlayer2;

    if (player === 'player1') {
      if (scorePlayer1 + increment <= 2 && totalScore + increment <= 3) {
        setScorePlayer1(Math.max(0, scorePlayer1 + increment));
      }
    } else if (player === 'player2') {
      if (scorePlayer2 + increment <= 2 && totalScore + increment <= 3) {
        setScorePlayer2(Math.max(0, scorePlayer2 + increment));
      }
    }
  };

  const handleSubmitResult = () => {
    const duelId = duel ? duel.duelId : invitation.duelId;
    updateDuel(duelId, scorePlayer1, scorePlayer2, true);
  };

  // Determine user data source
  const userOneData = duel ? duel.userOne : invitation.recipient;
  const userTwoData = duel ? duel.userTwo : invitation.sender;

  return (
    <div className="flex items-center justify-center">
      <ConfirmationMessage
        label="Submit the Match Result"
        description="Please note that once you submit the result, this match will be locked. Subsequent changes can only be made by administrators of the tournament."
        buttonText="Submit Result"
        onCancel={onCancel}
        onConfirm={handleSubmitResult}
      >
        <div className="flex py-2 justify-center items-center gap-3 self-stretch rounded-lg">
          {/* Player 1 */}
          <div className="flex p-0 flex-col justify-center items-center gap-1">
            <UserInfo
              userName={userOneData.userName}
              useravatar={userOneData.imageNumber}
            />
            <div className="flex items-center border-solid border-Neutral-400 border-[1px]">
              <div className="flex min-w-14 h-12 pr-6 pl-3 flex-col justify-center items-start gap-2 border-solid border-Neutral-400 border-[1px] bg-Neutral-800">
                <p className="font-body text-xl font-normal text-Neutral-400">{scorePlayer1}</p>
              </div>
              <div className="flex flex-col w-8 h-12 p-0 justify-center items-center border-solid border-Neutral-400 border-[1px] bg-Neutral-800">
                <ArrowUpIcon onClick={() => handleScoreChange('player1', 1)} />
                <div className="border-solid border-Neutral-400 border-[1px] w-full"></div>
                <ArrowDownIcon onClick={() => handleScoreChange('player1', -1)} />
              </div>
            </div>
          </div>

          {/* VS */}
          <div className="flex py-3 px-4 justify-center items-center gap-1 rounded bg-Neutral-500">
            <p className="font-body font-bold text-lg text-Neutral-50">VS</p>
          </div>

          {/* Player 2 */}
          <div className="flex p-0 flex-col justify-center items-center gap-1">
            <UserInfo
              userName={userTwoData.userName}
              useravatar={userTwoData.imageNumber}
            />
            <div className="flex items-center border-solid border-Neutral-400 border-[1px]">
              <div className="flex min-w-14 h-12 pr-6 pl-3 flex-col justify-center items-start gap-2 border-solid border-Neutral-400 border-[1px] bg-Neutral-800">
                <p className="font-body text-xl font-normal text-Neutral-400">{scorePlayer2}</p>
              </div>
              <div className="flex flex-col w-8 h-12 p-0 justify-center items-center border-solid border-Neutral-400 border-[1px] bg-Neutral-800">
                <ArrowUpIcon onClick={() => handleScoreChange('player2', 1)} />
                <div className="border-solid border-Neutral-400 border-[1px] w-full"></div>
                <ArrowDownIcon onClick={() => handleScoreChange('player2', -1)} />
              </div>
            </div>
          </div>
        </div>
      </ConfirmationMessage>
    </div>
  );
}

export default DuelSubmitResults;
