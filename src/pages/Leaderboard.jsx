import { useState } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Rankings from "../components/Rankings";
import EventCard from '../components/EventCard';
import { useTournaments } from "../hooks/useTournaments";

function Leaderboard() {
  const { tournamentsData, loading, error, ongoingTournaments } = useTournaments();
  console.log(tournamentsData);
  return (
    <>
      <div className="flex w-full max-w-[1512px] flex-col gap-8 self-center lg:gap-32">
        <Header 
          heading={`Leaderboard: The Arena Of Champions`}
          description={`Track the rise and fall of players, observe the top performers, and see where you stand among the best.`}
        />

        <div className="flex flex-col no-scrollbar gap-4 overflow-x-scroll  py-4 lg:py-16 xl:py-16">
          {ongoingTournaments.map((tournament) => (
            <EventCard
              key={tournament.tournamentId}
              bgID={tournament.imageNumber}
              title={tournament.tournamentName}
              startDate={tournament.startDate}
              endDate={tournament.endDate}
              description={tournament.description}
              twoWinsInThree={tournament.twoWinsInThreeGames}
              balancedMode={tournament.balancedMode}
              echoBan={tournament.echoBan}
              cardBan={tournament.cardBan}
              isRewarded={tournament.rewards}
              isFeatured={tournament.isFlagged}
              onLeaderboard="true"
              registeredUsers={tournament.registeredUsers}
            />
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Leaderboard;
