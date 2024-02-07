import Title from "./Title";
import Slider from "./Slider";
import Challenge from "./Challenge";

function ChallengesSent({ sentInvitations }) {
  const pendingSentInvitations = sentInvitations ? sentInvitations.filter(inv => !inv.isAccepted) : [];

  return (
    <>
      <div className="flex flex-col lg:gap-6">
        <Title>Awaiting Response</Title>
        {pendingSentInvitations.length > 0 ? (
          <Slider>
            {pendingSentInvitations.map((inv) => (
              <Challenge 
                key={inv.id}
                isPendingResponse
                username={inv.recipient.userName}
                imageNumber={inv.recipient.imageNumber}
                message={inv.message}
                dateTime={inv.dateTime}
              />
            ))}
          </Slider>
        ) : (
          <p className="font-body text-sm mt-2 mb-4 text-neutral-400">Nothing here yet.</p>
        )}
      </div>
    </>
  )
}

export default ChallengesSent;