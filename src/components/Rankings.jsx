import React from 'react';
import avatar1 from '/avatar01.svg';

/*Dynamically render users using UserInfo*/
/*Add color for 3 first players */

function Rankings({ tournamentId, onClose }) {
  

  return (
    <div className="flex py-4 flex-col items-center gap-4 self-stretch mx-auto">
      <h2 className="font-body font-bold text-lg">Leaderboard</h2>
      
      <div className=" md:hidden flex py-2 px-4 justify-center items-center gap-4 self-start rounded-lg bg-primary03-900">
        <div className="flex w-14 flex-col items-center gap-1">
          <p className="font-body font-semibold text-xs text-primary03-400">Rank</p>
          <p className="font-body font-bold text-lg text-Neutral-50">#01</p>
        </div>
        <div className="flex p-1 flex-row justify-center items-center gap-1">
            <img src={`${avatar1}`} className="w-10 h-10 justify-center items-center"/>
            <p className="font-body font-normal text-sm text-Neutral-50 pl-4">wzrdFace</p>
        </div>
        <div className="flex w-14 flex-col items-center gap-1">
          <p className="font-body font-semibold text-xs text-primary03-400">Points</p>
          <p className="font-body font-bold text-lg text-Neutral-50">42</p>
        </div>
      </div>
      
      {/*Render from md screen and up */}
      <div className="hidden md:flex w-full lg:w-180 py-2 px-4 items-center gap-4 self-start rounded-lg bg-primary03-900">
        <div className="flex w-14 flex-col items-center gap-1">
          <p className="font-body font-semibold text-xs text-primary03-400">Rank</p>
          <p className="font-body font-bold text-lg text-Neutral-50">#01</p>
        </div>
        <div className="flex p-1 flex-row justify-center items-center gap-1">
            <img src={`${avatar1}`} className="w-10 h-10 justify-center items-center"/>
            <p className="font-body font-normal text-sm text-Neutral-50 pl-4">wzrdFace</p>
        </div>
        <div className="flex w-14 flex-col items-center gap-1 ml-auto">
          <p className="font-body font-semibold text-xs text-primary03-400">Played</p>
          <p className="font-body font-bold text-lg text-Neutral-50">14</p>
        </div>
        <div className="flex w-14 flex-col items-center gap-1">
          <p className="font-body font-semibold text-xs text-primary03-400">Wins</p>
          <p className="font-body font-bold text-lg text-Neutral-50">13</p>
        </div>
        <div className="flex w-14 flex-col items-center gap-1">
          <p className="font-body font-semibold text-xs text-primary03-400">Defeats</p>
          <p className="font-body font-bold text-lg text-Neutral-50">1</p>
        </div>
        <div className="flex w-14 flex-col items-center gap-1">
          <p className="font-body font-semibold text-xs text-primary03-400">Points</p>
          <p className="font-body font-bold text-lg text-Neutral-50">42</p>
        </div>
      </div>
      
    </div>
  );
}

export default Rankings;
