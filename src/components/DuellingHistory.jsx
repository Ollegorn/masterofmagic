import { useDuels } from "../hooks/useEvents";
import DuelListItem from "./DuelListItem";
import Title from "./Title";

function DuellingHistory({ evenId = 1, userId = 1 }) {
  const duels = useDuels(evenId, userId);
  return (
    <>
      <div className="flex flex-col gap-4 lg:gap-6">
        <Title>Duelling History</Title>
        <ul className="flex flex-col gap-4">
          {duels.map((d) => (
            <DuelListItem
              key={d.eventId}
              player1Id={d.player1Id}
              player1Wins={d.player1Wins}
              player2Id={d.player2Id}
              player2Wins={d.player2Wins}
              variant={
                (userId === d.player1Id && d.player1Wins > d.player2Wins) ||
                (userId === d.player2Id && d.player2Wins > d.player1Wins)
                  ? "success"
                  : "failure"
              }
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default DuellingHistory;
