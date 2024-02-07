import Challenge from "./Challenge";
import Title from "./Title";
import Slider from "./Slider";

function ChallengesScheduled({ receivedInvitations, sentInvitations, userId }) {
  const receivedAcceptedInvitations = receivedInvitations ? receivedInvitations.filter(inv => inv.isAccepted) : [];
  const sentAcceptedInvitations = sentInvitations ? sentInvitations.filter(inv => inv.isAccepted) : [];
  const allAcceptedInvitations = [...receivedAcceptedInvitations, ...sentAcceptedInvitations];

  return (
    <>
      <div className="flex flex-col lg:gap-6">
        <Title>Your Next Matches</Title>
        {allAcceptedInvitations.length > 0 ? (
          <Slider>
            {allAcceptedInvitations.map((invitation) => {
              return (
                <Challenge
                  key={invitation.id}
                  username={invitation.recipient.id === userId ? invitation.sender.userName : invitation.recipient.userName}
                  imageNumber={invitation.recipient.id === userId ? invitation.sender.imageNumber : invitation.recipient.imageNumber}
                  message={invitation.message}
                  dateTime={invitation.dateTime}
                />
              );
            })}
          </Slider>
        ) : (
          <p className="font-body text-sm  mt-2 mb-4 text-neutral-400">Nothing here yet.</p>
        )}
      </div>
    </>
  );
}

export default ChallengesScheduled;