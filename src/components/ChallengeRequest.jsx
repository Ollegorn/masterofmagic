import React from 'react';
import avatar1 from '/avatar1.svg';
import avatar2 from '/avatar2.svg';
import ConfirmationMessage from './ConfirmationMessage';

/*Dynamically render users using UserInfo*/

function ChallengeRequest() {
  return (
    <>
      <ConfirmationMessage label="Challenge Opponent To A Magical Duel"  buttonText="Challenge Opponent">
        <div className="flex py-4 justify-center items-center gap-3 self-stretch rounded-lg">
          <div className="flex p-0 flex-col justify-center items-center gap-1">
              <img src={`${avatar1}`} className="w-10 h-10 justify-center items-center"/>
              <p className="font-body font-normal text-sm text-Neutral-50">wzrdFace</p>
          </div>

          <div className="flex py-3 px-4 mx-4 justify-center items-center gap-1 rounded bg-Neutral-500">
              <p className="font-body font-bold text-lg text-Neutral-50">VS</p>
          </div>

          <div className="flex p-0 flex-col justify-center items-center gap-1">
              <img src={`${avatar2}`} className="w-10 h-10 justify-center items-center"/>
              <p className="font-body font-normal text-sm text-Neutral-50">CassCass</p>
          </div>

        </div>
        <div className="flex flex-col items-start">
          <label className="font-body text-base font-semibold text-Neutral-100 md:text-lg lg:text-xl xl:text-xl ">Date</label>
          <div className="flex mb-4 items-center gap-2 self-stretch rounded-lg bg-Neutral-800 py-4 px-2 focus-within:bg-Neutral-700 focus-within:shadow-glow hover:bg-Neutral-700 hover:shadow-glow md:gap-3">
            <input type="date" className="flex flex-1 items-center bg-transparent text-base text-gray-400 focus:outline-none md:text-lg lg:text-xl xl:text-2xl w-full"></input>
          </div>
          <label className="font-body text-base font-semibold text-Neutral-100 md:text-lg lg:text-xl xl:text-xl ">Time</label>
          <div className="flex mb-4 items-center gap-2 self-stretch rounded-lg bg-Neutral-800 py-4 px-2 focus-within:bg-Neutral-700 focus-within:shadow-glow hover:bg-Neutral-700 hover:shadow-glow md:gap-3">
            <input type="time" className="flex flex-1 items-center bg-transparent text-base text-gray-400 focus:outline-none md:text-lg lg:text-xl xl:text-2xl w-full"></input>
          </div>
          <label className="font-body text-base font-semibold text-Neutral-100 md:text-lg lg:text-xl xl:text-xl">Message</label>
          <div className="flex items-center gap-2 self-stretch rounded-lg bg-Neutral-800 p-4 focus-within:bg-Neutral-700 focus-within:shadow-glow hover:bg-Neutral-700 hover:shadow-glow md:gap-3">
            <textarea
              placeholder="Write a short message to your opponent."
              className="flex flex-1 h-auto items-center bg-transparent text-base text-Neutral-50 focus:outline-none md:text-lg lg:text-xl xl:text-2xl resize-none w-full"
              maxLength={150}
            />
          </div>
        </div>
      </ConfirmationMessage>
    </>
  )
}

export default ChallengeRequest;