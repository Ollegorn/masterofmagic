import React from "react";
import Carousel from "./Carousel";
import useEvents from "../hooks/useEvents";
import EventCard from "./EventCard";
import SectionHeader from "./SectionHeader";
import { useScreenSize, breakPoint } from "../hooks/useScreenSize";

function SectionEvents({ sectionHeading, isActionable, includeSecondaryAction, labelSeconary }) {
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
        />
        <div className="no-scrollbar flex gap-4 overflow-x-scroll py-4 md:py-8 lg:gap-6 lg:py-16">
          <Carousel>
            {events
              .filter((e) => e.isFeatured)
              .map((event) => (
                <EventCard
                  key={event.id}
                  bgID={event.bgID}
                  title={event.title}
                  startDate={event.startDate}
                  endDate={event.endDate}
                  description={event.description}
                  tournamentFormat={event.tournamentFormat}
                  duelMode={event.duelMode}
                  twoWinsInThree={event.twoWinsInThree}
                  balancedMode={event.balancedMode}
                  echoBan={event.echoBan}
                  cardBan={event.cardBan}
                  isRewarded={event.isRewarded}
                  isFeatured={event.isFeatured}
                  includeAction
                  buttonLabel="Register Now"
                />
              ))}
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default SectionEvents;
