import React from 'react';
import UserInfo from './UserInfo';

function Rankings({ registeredUsers, tournamentId }) {
  const sortUsersByTotalPoints = () => {
    return registeredUsers.slice().sort((a, b) => b.tournamentStats[0].totalPoints - a.tournamentStats[0].totalPoints);
  };

  const sortedUsers = sortUsersByTotalPoints();

  // Function to find tournamentStats based on tournamentId
  const findTournamentStats = (user) => {
    const stats = user.tournamentStats.find(stats => stats.tournamentId === tournamentId) || {
      played: 0,
      wins: 0,
      defeats: 0,
      totalPoints: 0
    };
    return stats;
  };

  return (
    <div className="flex flex-col items-center gap-4 self-stretch mx-auto">
      {sortedUsers.map((user, index) => (
        <div key={user.id} className={`md:hidden flex py-2 px-4 justify-center items-center gap-4 self-start rounded-lg bg-primary03-900`}>
          <div className="flex w-14 flex-col items-center gap-1">
            <p className="font-body font-semibold text-xs text-primary03-400">Rank</p>
            <p className="font-body font-bold text-lg text-Neutral-50">#{index + 1}</p>
          </div>
          <UserInfo userName={user.userName} orientation="row" useravatar={`bg-avatar${user.imageNumber}`} />
          <div className="flex w-14 flex-col items-center gap-1">
            <p className="font-body font-semibold text-xs text-primary03-400">Points</p>
            <p className="font-body font-bold text-lg text-Neutral-50">{findTournamentStats(user).totalPoints}</p>
          </div>
        </div>
      ))}

      {/*Render from md screen and up */}
      {sortedUsers.map((user, index) => (
        <div key={user.id} className="hidden md:flex w-full lg:w-180 py-2 px-4 items-center gap-4 self-start rounded-lg bg-primary03-900">
          <div className="flex w-14 flex-col items-center gap-1">
            <p className="font-body font-semibold text-xs text-primary03-400">Rank</p>
            <p className="font-body font-bold text-lg text-Neutral-50">#{index + 1}</p>
          </div>
          <UserInfo userName={user.userName} orientation="row" useravatar={`bg-avatar${user.imageNumber}`} />
          <div className="flex w-14 flex-col items-center gap-1 ml-auto">
            <p className="font-body font-semibold text-xs text-primary03-400">Played</p>
            <p className="font-body font-bold text-lg text-Neutral-50">{findTournamentStats(user).played}</p>
          </div>
          <div className="flex w-14 flex-col items-center gap-1">
            <p className="font-body font-semibold text-xs text-primary03-400">Wins</p>
            <p className="font-body font-bold text-lg text-Neutral-50">{findTournamentStats(user).wins}</p>
          </div>
          <div className="flex w-14 flex-col items-center gap-1">
            <p className="font-body font-semibold text-xs text-primary03-400">Defeats</p>
            <p className="font-body font-bold text-lg text-Neutral-50">{findTournamentStats(user).defeats}</p>
          </div>
          <div className="flex w-14 flex-col items-center gap-1">
            <p className="font-body font-semibold text-xs text-primary03-400">Points</p>
            <p className="font-body font-bold text-lg text-Neutral-50">{findTournamentStats(user).totalPoints}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rankings;
