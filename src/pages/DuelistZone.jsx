import Header from "../components/Header";
import SectionJoinedEvents from "../components/SectionJoinedEvents";

function DuelistZone() {
  return (
    <>
      <div className="flex w-full flex-col gap-16 lg:gap-32">
        <Header
          heading={`Duelist Zone: Your Personal Magic Arena`}
          description={`This is your space to strategize, reflect, and prepare for your next magical challenge.`}
        />
        <SectionJoinedEvents />
      </div>
    </>
  );
}

export default DuelistZone;
