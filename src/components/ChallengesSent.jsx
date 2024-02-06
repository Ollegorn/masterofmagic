import Title from "./Title";
import Slider from "./Slider";
import Challenge from "./Challenge";

function ChallengesSent({ sentInvitations }) {
  const pendingSentInvitations = sentInvitations ? sentInvitations.filter(inv => !inv.isAccepted) : [];

  return (
    <>
      <div className="flex flex-col mx-2 lg:gap-6">
        <Title>Awaiting Response</Title>
        {pendingSentInvitations.length > 0 ? (
          <Slider>
            {pendingSentInvitations.map((inv) => (
              <Challenge 
                key={inv.id}
                isOpen
                username={inv.recipient.userName}
                imageNumber={inv.recipient.imageNumber}
                message={inv.message}
                dateTime={inv.dateTime}
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

export default ChallengesSent;