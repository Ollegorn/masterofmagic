import DuelListItem from "./DuelListItem";
import Title from "./Title";

function UnchallengedOpponents({ duels, userId }) {
  return (
    <>
      <div className="flex flex-col gap-4 lg:gap-6">
        <Title>Unchallenged Opponents</Title>
        <ul className="flex flex-col gap-4">
          {duels.map((d) => (
            <DuelListItem
            key={d.eventId}
            player1={d.userOne}
            player1Wins={d.duelWins}
            player2={d.userTwo}
            player2Wins={d.duelDefeats}
          />
          ))}
        </ul>
      </div>
    </>
  );
}

export default UnchallengedOpponents;
