import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionJoinedEvents from "../components/SectionJoinedEvents";

function DuelistZone() {
  return (
    <>
      <div className="flex w-full max-w-[1512px] flex-col gap-16 self-center lg:gap-32">
        <Header
          heading={`Duelist Zone: Your Personal Magic Arena`}
          description={`This is your space to strategize, reflect, and prepare for your next magical challenge.`}
        />
        <SectionJoinedEvents />
        <Footer />
      </div>
    </>
  );
}

export default DuelistZone;
