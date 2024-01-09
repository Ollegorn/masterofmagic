import useEvents from "../hooks/useEvents";
import ImageCard from "./ImageCard";
import SectionHeader from "./SectionHeader";
import { useScreenSize, breakPoint } from "../hooks/useScreenSize";

function SectionJoinedEvents() {
  const events = useEvents();
  const screen = useScreenSize();

  return (
    <>
      <section className="w-full px-4 md:px-8 lg:px-6">
        <SectionHeader
          heading="Events You Have Joined"
          isActionable={screen.width > breakPoint.md ? true : false}
          includeSecondaryAction
          labelSeconary="See All Tournaments"
        />
        <div className="no-scrollbar flex flex-col gap-4 overflow-x-scroll py-4 md:flex-row md:py-8 lg:gap-6 lg:py-16">
          {events.map((event) => (
            <ImageCard
              key={event.id}
              bgID={event.bgID}
              title={event.title}
              startDate={event.startDate}
              endDate={event.endDate}
              isClickable
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default SectionJoinedEvents;
