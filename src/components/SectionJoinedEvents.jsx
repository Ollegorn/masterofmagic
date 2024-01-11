import useEvents from "../hooks/useEvents";
import ImageCard from "./ImageCard";
import SectionHeader from "./SectionHeader";
import { useScreenSize, breakPoint } from "../hooks/useScreenSize";
import Statistics from "./Statistics";
import DuellingHistory from "./DuellingHistory";
import UnchallengedOpponents from "./UnchallengedOpponents";

function SectionJoinedEvents() {
  const userId = 1; //! ADD LOGIC TO GET USERID OF CURRENT USER
  const events = useEvents().filter((e) =>
    e.participants.some((u) => u.userId === userId),
  );
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
                  <div className="flex flex-col gap-4 self-stretch py-4 md:gap-8 md:py-8 lg:gap-16 lg:py-16">
                    <Statistics key={event.id} eventId={event.id} />
                    <DuellingHistory
                      key={event.id}
                      evenId={event.id}
                      userId={userId}
                    />
                    <UnchallengedOpponents
                      key={event.id}
                      evenId={event.id}
                      userId={userId}
                    />
                  </div>
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
