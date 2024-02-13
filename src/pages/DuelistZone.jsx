import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionJoinedEvents from "../components/SectionJoinedEvents";

function DuelistZone() {
  
  const jwtToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('jwtToken='));
  const isLoggedIn = jwtToken !== undefined && jwtToken !== null;

  return (
    <>
      <div className="flex w-full max-w-[1512px] flex-col gap-16 self-center lg:gap-32">
        <Header
          heading={`Duelist Zone: Your Personal Magic Arena`}
          description={`This is your space to strategize, reflect, and prepare for your next magical challenge.`}
        />
        {isLoggedIn ? (
          <SectionJoinedEvents />
        ) : (
          <div className="text-center">
            <p className="text-3xl font-body font-semibold">
              Log in to access the Duelist Zone
            </p>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}

export default DuelistZone;
