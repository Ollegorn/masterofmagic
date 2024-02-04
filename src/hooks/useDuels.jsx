import { useEffect, useState } from 'react';

function useDuels(userId, tournamentData) {
  const [playedDuels, setPlayedDuels] = useState([]);
  const [unplayedDuels, setUnplayedDuels] = useState([]);

  // Effect for userId changes
  useEffect(() => {
    const playedDuels = [];
    const unplayedDuels = [];
  
    tournamentData.forEach((tournament) => {
      tournament.tournamentDuels.forEach((duel) => {
        const isUserInDuel = duel.userOne.id === userId || duel.userTwo.id === userId;
  
        const modifiedDuel = {
          ...duel,
          userOne: duel.userTwo.id === userId ? duel.userTwo : duel.userOne,
          userTwo: duel.userTwo.id === userId ? duel.userOne : duel.userTwo,
        };
  
        if (isUserInDuel) {
          if (duel.isCompleted) {
            playedDuels.push(modifiedDuel);
          } else {
            unplayedDuels.push(modifiedDuel);
          }
        }
      });
    });
  
    setPlayedDuels(playedDuels);
    setUnplayedDuels(unplayedDuels);
  }, []);


  function getUserTournamentStats(tournament) {
    const user = tournament.registeredUsers.find((user) => user.id === userId);
    return user ? user.tournamentStats.find((stats) => stats.tournamentId === tournament.tournamentId) : null;
  }

  function getUserRank(tournament) {
    const sortedUsers = tournament.registeredUsers.slice().sort((a, b) => {
      const statsA = a.tournamentStats.find((stats) => stats.tournamentId === tournament.tournamentId) || { totalPoints: 0 };
      const statsB = b.tournamentStats.find((stats) => stats.tournamentId === tournament.tournamentId) || { totalPoints: 0 };
      return statsB.totalPoints - statsA.totalPoints;
    });

    const userIndex = sortedUsers.findIndex((user) => user.id === userId);

    return userIndex !== -1 ? userIndex + 1 : null;
  }

  return { playedDuels, unplayedDuels, getUserTournamentStats, getUserRank };
}

export default useDuels;
