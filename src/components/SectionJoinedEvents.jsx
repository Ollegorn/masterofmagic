import ImageCard from "./ImageCard";
import SectionHeader from "./SectionHeader";
import { useScreenSize, breakPoint } from "../hooks/useScreenSize";
import Statistics from "./Statistics";
import DuellingHistory from "./DuellingHistory";
import UnchallengedOpponents from "./UnchallengedOpponents";
import { useTournaments } from "../hooks/useTournaments";

function SectionJoinedEvents() {
  const userIdCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('userId='));
  const userId = userIdCookie ? userIdCookie.split('=')[1] : null;

  const { ongoingTournaments, upcomingTournaments } = useTournaments();
  const screen = useScreenSize();
  const ongoingTournamentsUserParticipates = ongoingTournaments.filter((t) => t.registeredUsers.some((u) => u.id === userId));
  const upcomingTournamentsUserParticipates = upcomingTournaments.filter((t) => t.registeredUsers.some((u) => u.id === userId));
  
  function getPlayedDuels(tournamentData, userId) {
    const playedDuels = [];
    tournamentData.forEach((tournament) => {
        tournament.tournamentDuels.forEach((duel) => {
            const isUserInDuel = duel.userOne.id === userId || duel.userTwo.id === userId;
            if (isUserInDuel && duel.isCompleted) {
                //logged-in user always userOne
                const modifiedDuel = {
                    ...duel,
                    userOne: duel.userTwo.id === userId ? duel.userTwo : duel.userOne,
                    userTwo: duel.userTwo.id === userId ? duel.userOne : duel.userTwo,
                };
                playedDuels.push(modifiedDuel);
            }
        });
    });
    return playedDuels;
}

function getUnplayedDuels(tournamentData, userId) {
    const unplayedDuels = [];
    tournamentData.forEach((tournament) => {
        tournament.tournamentDuels.forEach((duel) => {
            const isUserInDuel = duel.userOne.id === userId || duel.userTwo.id === userId;
            if (isUserInDuel && !duel.isCompleted) {
                //logged-in user always userOne
                const modifiedDuel = {
                    ...duel,
                    userOne: duel.userTwo.id === userId ? duel.userTwo : duel.userOne,
                    userTwo: duel.userTwo.id === userId ? duel.userOne : duel.userTwo,
                };
                unplayedDuels.push(modifiedDuel);
            }
        });
    });
    return unplayedDuels;
}



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
          {ongoingTournamentsUserParticipates.map((event) => (
            <div key={event.id} className="flex flex-col gap-4 self-stretch py-4 md:py-8 lg:gap-6 lg:py-16">
              <ImageCard
                bgID={event.imageNumber}
                title={event.tournamentName}
                startDate={event.startDate}
                endDate={event.endDate}
                isClickable
              />
              <div className="flex flex-col gap-4 self-stretch py-4 md:gap-8 md:py-8 lg:gap-16 lg:py-16">
                <Statistics key={event.id} eventId={event.id} />
                <DuellingHistory key={event.tournamentId} eventId={event.tournamentId} userId={userId} duels={getPlayedDuels([event], userId)} />
                {console.log("Duels passed to DuellingHistory:", getPlayedDuels([event], userId))}
                <UnchallengedOpponents key={event.tournamentId} eventId={event.tournamentId} userId={userId} duels={getUnplayedDuels([event], userId)} />
              </div>
            </div>
          ))}
          {upcomingTournamentsUserParticipates.map((event) => (
            <div key={event.id} className="flex flex-col gap-4 self-stretch py-4 md:py-8 lg:gap-6 lg:py-16">
              <ImageCard
                bgID={event.imageNumber}
                title={event.tournamentName}
                startDate={event.startDate}
                endDate={event.endDate}
                isClickable
              />
              <p className="flex-1 font-body text-xs text-neutral-50 sm:text-sm md:text-base lg:text-lg xl:text-xl">
                Nothing to see here - this Tournament hasn't begun yet!
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default SectionJoinedEvents;
