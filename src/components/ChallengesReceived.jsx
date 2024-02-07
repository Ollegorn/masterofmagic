import Title from "./Title";
import Slider from "./Slider";
import Challenge from "./Challenge";

function ChallengesReceived({ receivedInvitations }) {
  const pendingReceivedInvitations = receivedInvitations ? receivedInvitations.filter(inv => !inv.isAccepted) : [];

  return (
    <>
      <div className="flex flex-col  lg:gap-6">
        <Title>Incoming Challenges</Title>
        {pendingReceivedInvitations.length > 0 ? (
          <Slider>
            {pendingReceivedInvitations.map((inv) => (
              <Challenge 
                key={inv.id}
                isOpen
                username={inv.sender.userName}
                imageNumber={inv.sender.imageNumber}
                message={inv.message}
                dateTime={inv.dateTime}
              />
            ))}
          </Slider>
        ) : (
          <p className="font-body mt-2 mb-4 text-sm text-neutral-400">Nothing here yet.</p>
        )}
      </div>
    </>
  )
}

export default ChallengesReceived;