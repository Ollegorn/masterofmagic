import React, { useState } from 'react';
import ConfirmationMessage from './ConfirmationMessage';
import UserInfo from './UserInfo';
import useInvitations from "../hooks/useInvitations";

function ChallengeRequest({ invitation, onCancel }) {
  const { returnInvitationToSender } = useInvitations();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleReschedule = () => {
    const requestBody = {
      id: invitation.id,
      dateTime: `${date}T${time}`,
      message: message,
      isAccepted: false,
      isDeclined: false,
    };

    returnInvitationToSender(requestBody);
  };

  return (
    <>
      <ConfirmationMessage
        label="Challenge Opponent To A Magical Duel"
        buttonText="Challenge Opponent"
        onCancel={onCancel}
        onConfirm={handleReschedule}
      >
        <div className="flex py-4 justify-center items-center gap-3 self-stretch rounded-lg">
          <UserInfo 
            userName={invitation.sender.userName}
            useravatar={invitation.sender.imageNumber}
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
