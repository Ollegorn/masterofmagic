import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import SectionEvents from "../components/SectionEvents";
import EventCard from "../components/EventCard";
import useEvents from "../hooks/useEvents";




function TournamentHub() {
  const events = useEvents();

  return (
    <>
      <div className="flex w-full max-w-[1512px] flex-col gap-16 self-center lg:gap-32">
        <Header
          heading={`Tournament hub: Your Central Portal for all things duelling`}
          description={`Here, you can effortlessly create, manage, and cancel magical tournaments. Browse through upcoming, ongoing, and past tournaments, and set up thrilling competitions for your community.`}
          buttonLabel={`Create New Tournament`}
          isActionable
        />
        <SectionEvents
          sectionHeading={`Currently Ongoing Events`}
        />
        <section className="w-full px-4 md:px-8 lg:px-6">
          <SectionHeader 
            heading={`Upcoming Events`}
            isActionable
            includePrimaryAction
            labelPrimary="Create New Tournament"
          />

          <div className="flex flex-col no-scrollbar gap-4 overflow-x-scroll py-4 md:flex-row md:flex-wrap lg:flex-wrap xl:flex-wrap xl:flex-row lg:py-16 xl:py-16">
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
          </div>
        </section>


   

        <Footer />
      </div>
    </>
  );
}

export default TournamentHub;
