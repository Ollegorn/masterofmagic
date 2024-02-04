import Title from "./Title";
import Losses from "../assets/icon_losses.svg";
import Played from "../assets/icon_played.svg";
import Points from "../assets/icon_points.svg";
import Rank from "../assets/icon_rank.svg";
import Wins from "../assets/icon_wins.svg";
import Tile from "./Tile";

function Statistics({ tournamentStats, userRank }) {
  return (
    <>
      <div className="flex flex-col gap-4 lg:gap-6">
        <Title>Performance Statistics</Title>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4" key={tournamentStats.id}>
            <Tile icon={Played} label="Played" value={tournamentStats.wins + tournamentStats.defeats} stretch />
            <Tile icon={Wins} label="Wins" value={tournamentStats.wins} />
            <Tile icon={Losses} label="Losses" value={tournamentStats.defeats} />
            <Tile icon={Points} label="Points" value={tournamentStats.totalPoints} stretch />
            <Tile icon={Rank} label="Rank" value={userRank} stretch />
          </div>
      </div>
    </>
  );
}

export default Statistics;
