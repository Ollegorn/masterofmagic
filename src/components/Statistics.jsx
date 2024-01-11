import { useStats } from "../hooks/useEvents";
import Title from "./Title";
import Losses from "../assets/icon_losses.svg";
import Played from "../assets/icon_played.svg";
import Points from "../assets/icon_points.svg";
import Rank from "../assets/icon_rank.svg";
import Wins from "../assets/icon_wins.svg";
import Tile from "./Tile";

function Statistics({ eventId }) {
  const stats = useStats(eventId, 1);
  return (
    <>
      <div className="flex flex-col gap-4 lg:gap-6">
        <Title>Performance Statistics</Title>
        {stats.map((s) => (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Tile icon={Played} label="Played" value={s.played} stretch />
            <Tile icon={Wins} label="Wins" value={s.wins} />
            <Tile icon={Losses} label="Losses" value={s.losses} />
            <Tile icon={Points} label="Points" value={s.points} stretch />
            <Tile icon={Rank} label="Rank" value={s.rank} stretch />
          </div>
        ))}
      </div>
    </>
  );
}

export default Statistics;
