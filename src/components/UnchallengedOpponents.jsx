import { useMatchUps } from "../hooks/useEvents";
import DuelListItem from "./DuelListItem";
import Title from "./Title";

function UnchallengedOpponents({ evenId = 1, userId = 1 }) {
  const matchups = useMatchUps(evenId, userId);
  return (
    <>
      <div className="flex flex-col gap-4 lg:gap-6">
        <Title>Unchallenged Opponents</Title>
        <ul className="flex flex-col gap-4">
          {matchups.map((m) => (
            <DuelListItem
              key={m.eventId}
              player1Id={m.player1Id}
              player1Wins={m.player1Wins}
              player2Id={m.player2Id}
              player2Wins={m.player2Wins}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default UnchallengedOpponents;
