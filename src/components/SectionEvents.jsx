import useEvents from "../hooks/useEvents";
import EventCard from "./EventCard";
import SectionHeader from "./SectionHeader";
import { useScreenSize, breakPoint } from "../hooks/useScreenSize";

function SectionEvents() {
  const events = useEvents();
  const screen = useScreenSize();

  return (
    <>
      <section className="w-full px-4 md:px-8 lg:px-6">
        <SectionHeader
          heading="Join Today's Magical Battles"
          isActionable={screen.width > breakPoint.md ? true : false}
          includeSecondaryAction
          labelSeconary="See All"
        />
        <div className="no-scrollbar flex gap-4 overflow-x-scroll py-4 md:py-8 lg:gap-6 lg:py-16">
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
                type={event.type}
                team={event.team}
                isFeatured={event.isFeatured}
                status={event.status}
              />
            ))}
        </div>
      </section>
    </>
  );
}

export default SectionEvents;
