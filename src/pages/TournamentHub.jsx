import { useEffect, useState } from "react";
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
import { usePopup, useFullscreenModal } from "../hooks/usePopup";
import useRegisterToTournament from "../hooks/useRegisterToTournament";
import TournamentSettings from "../components/TournamentSettings";
import useDeleteTournament from "../hooks/useDeleteTournament";
import useStartTournament from "../hooks/useStartTournament";

function TournamentHub() {
  const navigate = useNavigate();
  const { isModalOpen, openModal, closeModal } = useFullscreenModal();
  const [ modalContent, setModalContent ] = useState(null);
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const [ popupContent, setPopupContent ] = useState(null);
  const { ongoingTournaments, upcomingTournaments, getTournamentsData } = useTournaments();
  const { registerToEvent } = useRegisterToTournament();
  const { deleteTournament } = useDeleteTournament();
  const { startTournament } = useStartTournament();
  const isAuthenticated = document.cookie.includes("jwtToken");
  const isAdmin = localStorage.getItem("roles")?.includes("Admin");
  const [selectedTournamentId, setSelectedTournamentId] = useState(null);
  const [selectedTournamentData, setSelectedTournamentData] = useState(null);
  const [ helper, setHelper ] = useState(false);
  
  useEffect(()=>{
    getTournamentsData();
    console.log("re-render");
  },[helper])
  
  const handleCreateTournamentClick = () => {
    openModal();
    setModalContent("create");
  };

  const handleCloseModal = () => {
    setSelectedTournamentData(null);
    closeModal();
    setModalContent(null);
    setHelper(!helper);

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
    setPopupContent("register");
  };

  const deleteTournamentConfirmationMessage = (tournamentId) => {
    setSelectedTournamentId(tournamentId);
    openPopup();
    setPopupContent("delete");
  }
  const startTournamentConfirmationMessage = (tournamentId) => {
    setSelectedTournamentId(tournamentId);
    openPopup();
    setPopupContent("start");
  }

  const handleConfirmation = async () => {
    await registerToEvent(selectedTournamentId);
    closePopupAndResetContent();
  };

  const handleDeletion = async () => {
    await deleteTournament(selectedTournamentId);
    closePopupAndResetContent();
  }

  const handleStart = async () => {
    await startTournament(selectedTournamentId);
    closePopupAndResetContent();
  }

  const handleOpenSettings = (tournamentData) => {
    setSelectedTournamentData(tournamentData);
    openModal();
    setModalContent("settings");
  }

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
          onClick={isAdmin ? handleOpenSettings : handleOnClickInsideEventCard}
          labelPrimary={isAdmin ? "Settings" : "Go to Leaderboard"}
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
                  buttonLabel={isAdmin ? "Setting" :"Register Now"}
                  onClick={() => isAdmin ? handleOpenSettings(tournament) : registerToEventConfirmationMessage(tournament.tournamentId)}
                />
              ))}
          </div>
        </section>
        <Footer />
      </div>

      {modalContent === "create" && (
        <FullscreenModal title="Create New Tournament" show={isModalOpen} onClose={handleCloseModal}>
          <CreateTournament />
        </FullscreenModal>
      )}
      {modalContent === "settings" && (
        <FullscreenModal title="Tournament settings" show={isModalOpen} onClose={handleCloseModal}>
          {/*might be able to pass the already existing data inside this */}
          <TournamentSettings 
            tournamentData={selectedTournamentData} 
            registerToEventConfirmationMessage={registerToEventConfirmationMessage} 
            deleteTournamentConfirmationMessage={deleteTournamentConfirmationMessage}
            startTournamentConfirmationMessage={startTournamentConfirmationMessage}
          />
        </FullscreenModal>
      )}
      {popupContent === "register" && (
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
      {popupContent === "delete" && (
        <Popup show={isPopupOpen} onClose={closePopupAndResetContent}>
        <ConfirmationMessage
          label="Delete the tournament"
          description="This is an ongoing tournament, deleting it will erase all the duel scores and all progress will be lost. This cannot be undone." 
          buttonText="Delete Tournament"
          onCancel={closePopupAndResetContent}
          onConfirm={handleDeletion}
        />
      </Popup>
      )}
      {popupContent === "start" && (
        <Popup show={isPopupOpen} onClose={closePopupAndResetContent}>
        <ConfirmationMessage
          label="Start the tournament"
          description="Starting the tournament will move its starting day to today. No more users will be able to join and the matchmaking will begin." 
          buttonText="Start Tournament"
          onCancel={closePopupAndResetContent}
          onConfirm={handleStart}
        />
      </Popup>
      )}
    </>
  );
}

export default TournamentHub;
