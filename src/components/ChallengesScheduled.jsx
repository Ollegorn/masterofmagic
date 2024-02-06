import Challenge from "./Challenge";
import Title from "./Title";
import Slider from "./Slider";

function ChallengesScheduled({ receivedInvitations, sentInvitations }) {
  const receivedAcceptedInvitations = receivedInvitations ? receivedInvitations.filter(inv => inv.isAccepted) : [];
  const sentAcceptedInvitations = sentInvitations ? sentInvitations.filter(inv => inv.isAccepted) : [];
  const allAcceptedInvitations = [...receivedAcceptedInvitations, ...sentAcceptedInvitations];

  return (
    <>
      <div className="flex flex-col gap-4 lg:gap-6">
        <Title>Your Next Matches</Title>
        {allAcceptedInvitations.length > 0 ? (
          <Slider>
            {allAcceptedInvitations.map((invitation) => (
              <Challenge
                key={invitation.id}
                username={invitation.recipient.userName}
                imageNumber={invitation.recipient.imageNumber}
                message={invitation.message}
                dateTime={invitation.dateTime}
              />
            ))}
          </Slider>
        ) : (
          <p className="font-body text-sm text-neutral-400">Nothing here yet.</p>
        )}
      </div>
    </>
  )
}

export default ChallengesScheduled;