import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import SectionEvents from "../components/SectionEvents";
import EventCard from "../components/EventCard";
import useEvents from "../hooks/useEvents";
import FullscreenModal from "../components/FullScreenModal";
import CreateTournament from "../components/CreateTournament";
import { useTournaments } from "../hooks/useTournaments";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import ConfirmationMessage from "../components/ConfirmationMessage";
import { usePopup } from "../hooks/usePopup";
import useRegisterToTournament from "../hooks/useRegisterToTournament";

function TournamentHub() {
  const events = useEvents();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const { ongoingTournaments, upcomingTournaments } = useTournaments();
  const { registerToEvent } = useRegisterToTournament();
  const isAuthenticated = document.cookie.includes("jwtToken");

  const [selectedTournamentId, setSelectedTournamentId] = useState(null);

  const handleCreateTournamentClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const scrolToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const handleOnClickInsideEventCard = () => {
    navigate("/leaderboard");
    scrolToTop();
  };

  const closePopupAndResetContent = () => {
    closePopup();
  };

  const registerToEventConfirmationMessage = (tournamentId) => {
    setSelectedTournamentId(tournamentId);
    openPopup();
  };

  const handleConfirmation = () => {
    registerToEvent(selectedTournamentId);
    closePopupAndResetContent();
  };

  return (
    <>
      <div className="flex w-full max-w-[1512px] flex-col gap-16 self-center lg:gap-32">
        <Header
          heading={`Tournament hub: Your Central Portal for all things duelling`}
          description={`Here, you can effortlessly create, manage, and cancel magical tournaments. Browse through upcoming, ongoing, and past tournaments, and set up thrilling competitions for your community.`}
          buttonLabel={`Create New Tournament`}
          isActionable
          onClick={handleCreateTournamentClick}
        />
        <SectionEvents
          sectionHeading={`Currently Ongoing Events`}
          tournaments={ongoingTournaments}
          onClick={handleOnClickInsideEventCard}
        />
        <section className="w-full px-4 md:px-8 lg:px-6">
          <SectionHeader 
            heading={`Upcoming Events`}
            isActionable
            includePrimaryAction
            labelPrimary="Create New Tournament"
            onClickPrimary={handleCreateTournamentClick}
          />

          <div className="flex flex-col no-scrollbar gap-4 overflow-x-scroll py-4 md:flex-row md:flex-wrap lg:flex-wrap xl:flex-wrap xl:flex-row lg:py-16 xl:py-16">
          {upcomingTournaments
              .map((tournament) => (
                <EventCard
                  tournamentId={tournament.tournamentId}
                  key={tournament.tournamentId}
                  bgID={tournament.imageNumber}
                  title={tournament.tournamentName}
                  startDate={tournament.startDate}
                  endDate={tournament.endDate}
                  description={tournament.description}
                  twoWinsInThree={tournament.twoWinsInThreeGames}
                  balancedMode={tournament.balancedMode}
                  echoBan={tournament.echoBan}
                  cardBan={tournament.cardBan}
                  isRewarded={tournament.rewards}
                  isFeatured={tournament.isFlagged}
                  //can change so it prompts user to login instead
                  includeAction={isAuthenticated ? true : false}
                  buttonLabel="Register Now"
                  onClick={registerToEventConfirmationMessage}
                />
              ))}
          </div>
        </section>

        <Footer />
      </div>

      {isModalOpen && (
        <FullscreenModal title="Create New Tournament" show={isModalOpen} onClose={handleCloseModal}>
          <CreateTournament />
        </FullscreenModal>
      )}
      {isPopupOpen && (
        <Popup show={isPopupOpen} onClose={closePopupAndResetContent}>
        <ConfirmationMessage
          label="Register Confirmation"
          description="Are you sure you want to register to this upcoming tournament?"
          buttonText="Register"
          onCancel={closePopupAndResetContent}
          onConfirm={handleConfirmation}
        />
      </Popup>
      )}
    </>
  );
}

export default TournamentHub;
