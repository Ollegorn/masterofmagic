import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import SectionEvents from "../components/SectionEvents";




function TournamentHub() {
  return (
    <>
      <div className="flex w-full max-w-[1512px] flex-col gap-16 self-center lg:gap-32">
        <Header
          heading={`Tournament hub: Your Central Portal for all things duelling`}
          description={`Here, you can effortlessly create, manage, and cancel magical tournaments. Browse through upcoming, ongoing, and past tournaments, and set up thrilling competitions for your community.`}
          buttonLabel={`Create New Tournament`}
          isActionable
        />
        <SectionEvents />
        <Footer />
      </div>
    </>
  );
}

export default TournamentHub;
