import Title from "./Title";
import Challenge from "./Challenge";
import Slider from "./Slider";

function UnchallengedOpponents({ unplayedDuels }) {
  return (
    <>
      <div className="flex flex-col mx-2 lg:gap-6">
        <Title>Unchallenged Opponents</Title>
        <Slider>
          {unplayedDuels.map((duel) => (
            <Challenge 
              key={duel.duelId}
              isUnchallenged
              username={duel.userTwo.userName}
              imageNumber={duel.userTwo.imageNumber}
            />
          ))}
        </Slider>
        
      </div>
    </>
  );
}

export default UnchallengedOpponents;
