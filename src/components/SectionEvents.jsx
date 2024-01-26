import React from "react";
import Carousel from "./Carousel";
import useEvents from "../hooks/useEvents";
import EventCard from "./EventCard";
import SectionHeader from "./SectionHeader";
import { useScreenSize, breakPoint } from "../hooks/useScreenSize";

function SectionEvents({ sectionHeading, isActionable, includeSecondaryAction, labelSeconary, onClickSecondary, tournaments }) {
  const events = useEvents();
  const screen = useScreenSize();

  return (
    <>
      <section className="w-full px-4 md:px-8 lg:px-6">
        <SectionHeader
          heading={sectionHeading || "Join Today's Magical Battles"}
          isActionable={screen.width > breakPoint.md ? true : false}
          includeSecondaryAction={includeSecondaryAction}
          labelSeconary={labelSeconary || "See All"}
          onClickSecondary={onClickSecondary}
        />
        <div className="no-scrollbar flex gap-4 overflow-x-scroll py-4 md:py-8 lg:gap-6 lg:py-16">
          <Carousel>
            {tournaments
              .map((tournament) => (
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
                  includeAction
                  buttonLabel="Go To Leaderboard"
                />
              ))}
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default SectionEvents;
