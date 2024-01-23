import { useState } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Rankings from "../components/Rankings";
import SectionEvents from "../components/SectionEvents";

function Leaderboard() {
  const [showRankings, setShowRankings] = useState(false);

  const toggleRankings = () => {
    setShowRankings((prevShowRankings) => !prevShowRankings);
  };

  return (
    <>
      <div className="flex w-full max-w-[1512px] flex-col gap-16 self-center lg:gap-32">
        <Header 
          heading={`Leaderboard: The Arena Of Champions`}
          description={`Track the rise and fall of players, observe the top performers, and see where you stand among the best.`}
        />

        <SectionEvents 
          sectionHeading={`All Ongoing Events`}
        />

        <button onClick={toggleRankings}>Show</button>

        {showRankings && <Rankings onClose={toggleRankings} />}

        <Footer />
      </div>
    </>
  );
}

export default Leaderboard;
