import React from "react";
import Carousel from "./Carousel";
import useEvents from "../hooks/useEvents";
import EventCard from "./EventCard";
import SectionHeader from "./SectionHeader";
import { useNavigate } from "react-router-dom";
import { useScreenSize, breakPoint } from "../hooks/useScreenSize";

function SectionEvents({ sectionHeading, isActionable, includeSecondaryAction, labelPrimary, labelSeconary, onClickSecondary, tournaments, onClick, isMainPage }) {
  const events = useEvents();
  const navigate = useNavigate();
  const screen = useScreenSize();

  const scrolToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  const goToTournamentHub = () => {
    navigate("/tournament_hub");
    scrolToTop();
  }
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
        {tournaments.length <= 0 ? (
          <p className="font-body text-sm mt-2 mb-4 text-neutral-400">
            There are no ongoing tournaments at the moment.{' '}
            {isMainPage && (
              <>
                <span className="text-neutral-300 cursor-pointer" onClick={goToTournamentHub}>
                  Go to tournament hub
                </span>{' '}
                to view upcoming events.
              </>
            )}
          </p>
        ):(
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
                    tournamentFormat={tournament.format}
                    duelMode={tournament.duelMode}
                    twoWinsInThree={tournament.twoWinsInThreeGames}
                    balancedMode={tournament.balancedMode}
                    echoBan={tournament.echoBan}
                    cardBan={tournament.cardBan}
                    isRewarded={tournament.rewards}
                    isFeatured={tournament.isFlagged}
                    includeAction
                    onClick={() => onClick(tournament)}
                    buttonLabel={labelPrimary}
                  />
                ))}
            </Carousel>
          </div>
        )}
      </section>
    </>
  );
}

export default SectionEvents;
