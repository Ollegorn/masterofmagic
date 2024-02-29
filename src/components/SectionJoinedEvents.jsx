import React, { useState, useEffect } from 'react';
import ImageCard from "./ImageCard";
import SectionHeader from "./SectionHeader";
import { useScreenSize, breakPoint } from "../hooks/useScreenSize";
import Statistics from "./Statistics";
import DuellingHistory from "./DuellingHistory";
import UnchallengedOpponents from "./UnchallengedOpponents";
import { useTournaments } from "../hooks/useTournaments";
import ChallengesReceived from "./ChallengesReceived";
import ChallengesScheduled from "./ChallengesScheduled";
import ChallengesSent from "./ChallengesSent";
import useInvitations from "../hooks/useInvitations"; 


function SectionJoinedEvents() {
  const userIdCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('userId='));
  const userId = userIdCookie ? userIdCookie.split('=')[1] : null;
  const { ongoingTournaments, upcomingTournaments,  getTournamentsData  } = useTournaments();
  const screen = useScreenSize();
  const ongoingTournamentsUserParticipates = ongoingTournaments.filter((t) => t.registeredUsers.some((u) => u.id === userId));
  const upcomingTournamentsUserParticipates = upcomingTournaments.filter((t) => t.registeredUsers.some((u) => u.id === userId));
  const { invitations, getAllInvitations } = useInvitations();
  const [helper, setHelper] = useState(false);
  
  useEffect(() => {
    getAllInvitations();
    getTournamentsData();
  }, [helper]);
  

  const handleHelper = () => {
    setHelper(!helper);
  };

  const getInvitationsBySenderId = (senderId, tournamentId) => {
    return invitations.filter(invitation => invitation.sender.id === senderId && invitation.tournamentId === tournamentId);
  };
  
  const getInvitationsByRecipientId = (recipientId, tournamentId) => {
    return invitations.filter(invitation => invitation.recipient.id === recipientId && invitation.tournamentId === tournamentId);
  };

  function getPlayedDuels(tournamentData, userId, tournamentId) {
    const playedDuels = [];
    const tournament = tournamentData.find(tournament => tournament.tournamentId === tournamentId);
    if (tournament) {
      tournament.tournamentDuels.forEach((duel) => {
        const isUserInDuel = duel.userOne.id === userId || duel.userTwo.id === userId;
        if (isUserInDuel && duel.isCompleted) {
          const isSwapped = duel.userTwo.id === userId;
          const modifiedDuel = {
            ...duel,
            userOne: isSwapped ? duel.userTwo : duel.userOne,
            userTwo: isSwapped ? duel.userOne : duel.userTwo,
            isSwapped: isSwapped,
          };
          playedDuels.push(modifiedDuel);
        }
      });
    }
    return playedDuels;
  }
  
  function getUnplayedDuels(tournamentData, userId, tournamentId) {
    const unplayedDuels = [];
    const tournament = tournamentData.find(tournament => tournament.tournamentId === tournamentId);
    if (tournament) {
      tournament.tournamentDuels.forEach((duel) => {
        const isUserInDuel = duel.userOne.id === userId || duel.userTwo.id === userId;
        if (isUserInDuel && !duel.isCompleted) {
          const isSwapped = duel.userTwo.id === userId;
          const modifiedDuel = {
            ...duel,
            userOne: isSwapped ? duel.userTwo : duel.userOne,
            userTwo: isSwapped ? duel.userOne : duel.userTwo,
            isSwapped: isSwapped,
          };
          unplayedDuels.push(modifiedDuel);
        }
      });
    }
    return unplayedDuels;
  }

  function getUserTournamentStats(userId, tournament) {
    const user = tournament.registeredUsers.find(user => user.id === userId);
    return user ? user.tournamentStats.find(stats => stats.tournamentId === tournament.tournamentId) : null;
  }

  function getUserRank(userId, tournament) {
    const sortedUsers = tournament.registeredUsers.slice().sort((a, b) => {
      const statsA = a.tournamentStats.find(stats => stats.tournamentId === tournament.tournamentId) || { totalPoints: 0 };
      const statsB = b.tournamentStats.find(stats => stats.tournamentId === tournament.tournamentId) || { totalPoints: 0 };
      return statsB.totalPoints - statsA.totalPoints;
    });

    const userIndex = sortedUsers.findIndex(user => user.id === userId);

    return userIndex !== -1 ? userIndex + 1 : null;
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
            <div key={`ongoing-tournaments-${event.tournamentId}`} className="flex flex-col gap-4 self-stretch py-4 md:py-8 lg:gap-6 lg:py-16">
              <ImageCard
                key={event.tournamentId}
                bgID={event.imageNumber}
                title={event.tournamentName}
                startDate={event.startDate}
                endDate={event.endDate}
                isClickable
              />
              <div className="flex flex-col gap-4 self-stretch py-4 md:gap-8 md:py-8 lg:gap-16 lg:py-16">
                <Statistics
                  key={`stats-${event.tournamentId}`} 
                  eventId={event.tournamentId}
                  tournamentStats={getUserTournamentStats(userId, event)}
                  userRank={getUserRank(userId, event)}
                 />
                <DuellingHistory 
                  key={`duel-history-${event.tournamentId}`} 
                  eventId={event.tournamentId} 
                  userId={userId} 
                  duels={getPlayedDuels([event], userId, event.tournamentId)} 
                />
                <ChallengesScheduled
                  key={`challenges-shceduled-${event.tournamentId}`}
                  receivedInvitations={getInvitationsByRecipientId(userId, event.tournamentId)}
                  sentInvitations={getInvitationsBySenderId(userId, event.tournamentId)}
                  userId={userId}
                  onClick={handleHelper}
                />
                <UnchallengedOpponents
                  key={`unchallenged-opp-${event.tournamentId}`}
                  unplayedDuels={getUnplayedDuels([event], userId, event.tournamentId)}
                  tournamentId={event.tournamentId}
                  onClick={handleHelper}
                />
                <ChallengesReceived 
                  key={event.tournamentId}
                  receivedInvitations={getInvitationsByRecipientId(userId, event.tournamentId)}
                  onClick={handleHelper}
                />
                <ChallengesSent 
                  key={`challenges-sent-${event.tournamentId}`}
                  sentInvitations={getInvitationsBySenderId(userId, event.tournamentId)}
                  onClick={handleHelper}
                />
              </div>
            </div>
          ))}
          {upcomingTournamentsUserParticipates.map((event) => (
            <div key={`upcomming-tourns-${event.tournamentId}`} className="flex flex-col gap-4 self-stretch py-4 md:py-8 lg:gap-6 lg:py-16">
              <ImageCard
                key={event.tournamentId}
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
