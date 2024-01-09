import useEvents from "../hooks/useEvents";
import ImageCard from "./ImageCard";
import SectionHeader from "./SectionHeader";
import { useScreenSize, breakPoint } from "../hooks/useScreenSize";
import Statistics from "./Statistics";

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
        <div className="flex flex-col gap-4 self-stretch py-4 md:py-8 lg:gap-6 lg:py-16">
          {events.map((event) => (
            <>
              <div className="flex flex-col gap-4 self-stretch py-4 md:py-8 lg:gap-6 lg:py-16">
                <ImageCard
                  key={event.id}
                  bgID={event.bgID}
                  title={event.title}
                  startDate={event.startDate}
                  endDate={event.endDate}
                  isClickable
                />
                {event.status !== "Current" ? (
                  <p className="flex-1 font-body text-xs text-neutral-50 sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    Nothing to see here - this Tournament hasn't begun yet!
                  </p>
                ) : null}
                {event.status === "Current" ? (
                  <Statistics eventId={event.id} />
                ) : null}
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default SectionJoinedEvents;
