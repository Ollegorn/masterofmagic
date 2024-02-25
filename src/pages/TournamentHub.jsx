import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import SectionEvents from "../components/SectionEvents";
import EventCard from "../components/EventCard";
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
import NotificationPopup from "../components/NotificationPopup";

function TournamentHub() {
  const navigate = useNavigate();
  const { isModalOpen, openModal, closeModal } = useFullscreenModal();
  const [modalContent, setModalContent] = useState(null);
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const [popupContent, setPopupContent] = useState(null);
  const { ongoingTournaments, upcomingTournaments, getTournamentsData } = useTournaments();
  const { registerToEvent } = useRegisterToTournament();
  const { deleteTournament } = useDeleteTournament();
  const { startTournament } = useStartTournament();
  const isAuthenticated = document.cookie.includes("jwtToken");
  const isAdmin = localStorage.getItem("roles")?.includes("Admin");
  const [selectedTournamentId, setSelectedTournamentId] = useState(null);
  const [selectedTournamentData, setSelectedTournamentData] = useState(null);
  const [helper, setHelper] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  useEffect(() => {
    getTournamentsData();
    console.log("re-render");
  }, [helper]);

  useEffect(() => {
    if (showSuccessNotification) {
      const timer = setTimeout(() => {
        setShowSuccessNotification(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessNotification]);

  const handleCreateTournamentClick = () => {
    openModal();
    setModalContent("create");
  };

  const handleCloseModal = () => {
    setSelectedTournamentData(null);
    closeModal();
    setModalContent(null);
    setHelper(prev => !prev);
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
    try {
      await registerToEvent(selectedTournamentId);
      setShowSuccessNotification(true);
      closePopupAndResetContent();
      setHelper(prev => !prev);
    } catch (error) {
      console.error("Failed to register to tournament:", error);
    }
  };

  const handleDeletion = async () => {
    try {
      await deleteTournament(selectedTournamentId);
      setShowSuccessNotification(true);
      closePopupAndResetContent();
      setHelper(prev => !prev);
    } catch (error) {
      console.error("Failed to delete tournament:", error);
    }
  }

  const handleStart = async () => {
    try {
      await startTournament(selectedTournamentId);
      setShowSuccessNotification(true);
      closePopupAndResetContent();
      setHelper(prev => !prev);
    } catch (error) {
      console.error("Failed to start tournament:", error);
    }
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
          isActionable={isAdmin ? true : false}
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
            isActionable={isAdmin ? true : false}
            includePrimaryAction
            labelPrimary="Create New Tournament"
            onClickPrimary={handleCreateTournamentClick}
          />

          <div className="flex flex-col no-scrollbar gap-4 overflow-x-scroll py-4 md:flex-row md:flex-wrap lg:flex-wrap xl:flex-wrap xl:flex-row lg:py-16 xl:py-16">
            {upcomingTournaments.length === 0 ? (
              <div className="font-body text-sm mt-2 mb-4 text-neutral-400">No scheduled events for now.</div>
            ) : (
              upcomingTournaments.map((tournament) => (
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
                  includeAction={isAuthenticated ? true : false}
                  buttonLabel={isAdmin ? "Setting" : "Register Now"}
                  onClick={() =>
                    isAdmin ? handleOpenSettings(tournament) : registerToEventConfirmationMessage(tournament.tournamentId)
                  }
                />
              ))
            )}
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
      {showSuccessNotification && (
        <NotificationPopup
          message="Action was successful!"
          variant="success"
          onClose={() => setShowSuccessNotification(false)}
        />
      )}
    </>
  );
}

export default TournamentHub;
