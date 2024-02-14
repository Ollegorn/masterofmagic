import React from 'react';
import UserInfo from './UserInfo';
import { CalendarIcon, ClockIcon, XMarkIcon, CheckIcon, ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import Button from './Button';

function Challenge({ isOpen, isUnchallenged, isPendingResponse, username, imageNumber, message, dateTime, isDeclined, onClickChallenge, onClickSubmit, isChallenged, onClickCancel }) {
  const parsedDate = new Date(dateTime);
  const date = parsedDate.toLocaleDateString();
  const time = parsedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <>
      <div className="flex w-48 p-2 flex-col justify-center items-center gap-2 rounded-lg border border-solid border-neutral-500 backdrop-blur-xl relative">
        {isDeclined && (
          <p className="absolute top-2/5 left-1/5 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-red-500" style={{ transform: 'rotate(-45deg)', textShadow: '2px 4px 18px rgba(0, 0, 0, 1)' }}>CANCELLED</p>
        )}
        <div className="flex flex-col w-44 justify-center items-center gap-2 mt-2">
          <UserInfo
            orientation={isUnchallenged ? "" : "row"}
            userName={username}
            useravatar={imageNumber}
          />
          <div className="flex items-center gap-4 self-stretch mx-auto">
            {!isUnchallenged && (
              <>
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4" />
                  <p className="font-body text-sm text-Neutral-50">{date}</p>
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-4"/>
                  <p className="font-body text-sm text-Neutral-50">{time}</p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="h-[3px] w-full my-2 rounded bg-gradient-to-r from-primary04-500 to-primary04-100"/>
        {isUnchallenged && !isPendingResponse ? (
          <div className="flex flex-col w-full gap-4">
            <Button onClick={onClickSubmit} variant="secondary" className="w-full h-12">Submit Result</Button>
            <Button isDisabled={isChallenged} onClick={onClickChallenge} className="w-full h-12">Challenge</Button>
          </div>
        ) : (
          <>
            <div className="self-stretch">
              <p className="font-body text-sm">
                {message}
              </p>
            </div>
            <div className="h-[3px] w-full my-2 rounded bg-gradient-to-r from-primary04-500 to-primary04-100" />
            {!isPendingResponse ? (
              <div className="flex justify-between items-center self-stretch">
                <XMarkIcon onClick={isDeclined ? null : onClickCancel} className={`h-12 mx-2 p-1  ${isDeclined ? "opacity-50" : 'cursor-pointer'} `} />
                {isOpen ? (
                  <CheckIcon onClick={onClickSubmit} className="h-12 mx-2 p-2 rounded-lg bg-primary01-800 cursor-pointer" />
                ) : (
                  <ArrowDownOnSquareIcon onClick={isDeclined ? null : onClickSubmit} className={`h-12 mx-2 p-2 rounded-lg bg-primary01-800 ${isDeclined ? "opacity-50" : 'cursor-pointer'}`} />
                )}
              </div>

            ):(
              <Button onClick={onClickCancel} variant="secondary" className="w-full h-12">Cancel</Button>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Challenge;
