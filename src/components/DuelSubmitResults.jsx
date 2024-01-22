import React from 'react'
import ConfirmationMessage from './ConfirmationMessage';
import avatar1 from '/avatar01.svg';
import avatar2 from '/avatar02.svg';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';


/*Dynamically render users using UserInfo*/

function DuelSubmitResults() {
  return (
    <div className="flex items-center justify-center">
      <ConfirmationMessage label="Submit the Match Result" description="Please note that once you submit the result, this match will be locked. Subsequent changes can only be made by administrators of the tournament." buttonText="Submit Result">
        <div className="flex py-2  justify-center items-center gap-3 self-stretch rounded-lg">

          <div className="flex p-0 flex-col justify-center items-center gap-1">
            <img src={`${avatar1}`} className="w-10 h-10 justify-center items-center"/>
            <p className="font-body font-normal text-sm text-Neutral-50">wzrdFace</p>
            <div className="flex  items-center border-solid border-Neutral-400 border-[1px]">
              <div className="flex h-12 pr-6 pl-3 flex-col justify-center items-start gap-2 border-solid border-Neutral-400 border-[1px] bg-Neutral-800">
                <p className="font-body text-xl font-normal text-Neutral-400">0</p>
              </div>
              <div className="flex flex-col w-8 h-12 p-0 justify-center items-center border-solid border-Neutral-400 border-[1px] bg-Neutral-800">
                <ArrowUpIcon />
                <div className="border-solid border-Neutral-400 border-[1px] w-full"></div>
                <ArrowDownIcon />
              </div>
            </div>
          </div>

          <div className="flex py-3 px-4 justify-center items-center gap-1 rounded bg-Neutral-500">
            <p className="font-body font-bold text-lg text-Neutral-50">VS</p>

          </div>

          <div className="flex p-0 flex-col justify-center items-center gap-1">
            <img src={`${avatar2}`} className="w-10 h-10 justify-center items-center"/>
            <p className="font-body font-normal text-sm text-Neutral-50">CassCass</p>
            <div className="flex  items-center border-solid border-Neutral-400 border-[1px]">
              <div className="flex h-12 pr-6 pl-3 flex-col justify-center items-start gap-2 border-solid border-Neutral-400 border-[1px] bg-Neutral-800">
                <p className="font-body text-xl font-normal text-Neutral-400">0</p>
              </div>
              <div className="flex flex-col w-8 h-12 p-0 justify-center items-center border-solid border-Neutral-400 border-[1px] bg-Neutral-800">
                <ArrowUpIcon />
                <div className="border-solid border-Neutral-400 border-[1px] w-full"></div>
                <ArrowDownIcon />
              </div>
            </div>


          </div>
        </div>
        
      </ConfirmationMessage>
    </div>
  )
}

export default DuelSubmitResults