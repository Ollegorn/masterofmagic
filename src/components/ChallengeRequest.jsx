import React, { useState } from 'react';
import Button from './Button';
import useInvitations from '../hooks/useInvitations';
import ConfirmationMessage from './ConfirmationMessage';
import UserInfo from './UserInfo';

function ChallengeRequest({ duel, onCancel, tournamentId }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const { addInvitation } = useInvitations();

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleChallengeOpponent = () => {
    const invitationData = {
      senderUsername: duel.userOne.userName,
      recipientUsername: duel.userTwo.userName,
      tournamentId: tournamentId,
      duelId: duel.duelId,
      dateTime: `${date}T${time}`,
      message: message,
      isAccepted: false,
      isDeclined: false,
      isChallenged: true,
    };
    console.log(invitationData);
    addInvitation(invitationData);

    onCancel();
  };

  return (
    <>
      <ConfirmationMessage
        label="Challenge Opponent To A Magical Duel"
        buttonText="Challenge Opponent"
        onCancel={onCancel}
        onConfirm={handleChallengeOpponent}
      >
        <div className="flex py-4 justify-center items-center gap-3 self-stretch rounded-lg">
          <UserInfo 
            userName={duel.userTwo.userName}
            useravatar={duel.userTwo.imageNumber}
          />
        </div>
        <div className="flex flex-col items-start">
          <label className="font-body text-base font-semibold text-Neutral-100 md:text-lg lg:text-xl xl:text-xl">Date</label>
          <div className="flex mb-4 items-center gap-2 self-stretch rounded-lg bg-Neutral-800 py-4 px-2 focus-within:bg-Neutral-700 focus-within:shadow-glow hover:bg-Neutral-700 hover:shadow-glow md:gap-3">
            <input 
              type="date" 
              className="flex flex-1 items-center bg-transparent text-base text-gray-400 focus:outline-none md:text-lg lg:text-xl xl:text-2xl w-full"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <label className="font-body text-base font-semibold text-Neutral-100 md:text-lg lg:text-xl xl:text-xl">Time</label>
          <div className="flex mb-4 items-center gap-2 self-stretch rounded-lg bg-Neutral-800 py-4 px-2 focus-within:bg-Neutral-700 focus-within:shadow-glow hover:bg-Neutral-700 hover:shadow-glow md:gap-3">
            <input 
              type="time" 
              className="flex flex-1 items-center bg-transparent text-base text-gray-400 focus:outline-none md:text-lg lg:text-xl xl:text-2xl w-full"
              value={time}
              onChange={handleTimeChange}
            />
          </div>
          <label className="font-body text-base font-semibold text-Neutral-100 md:text-lg lg:text-xl xl:text-xl">Message</label>
          <div className="flex items-center gap-2 self-stretch rounded-lg bg-Neutral-800 p-4 focus-within:bg-Neutral-700 focus-within:shadow-glow hover:bg-Neutral-700 hover:shadow-glow md:gap-3">
            <textarea
              placeholder="Write a short message to your opponent."
              className="flex flex-1 h-auto items-center bg-transparent text-base text-Neutral-50 focus:outline-none md:text-lg lg:text-xl xl:text-2xl resize-none w-full"
              maxLength={150}
              value={message}
              onChange={handleMessageChange}
            />
          </div>
        </div>
      </ConfirmationMessage>
    </>
  );
}

export default ChallengeRequest;
