import Badge from "./Badge";
import ImageCard from "./ImageCard";

function EventCard({
  bgID = 1,
  title = "Event Name",
  startDate = "01.01.2024",
  endDate = "14.01.2024",
  description = "Event Description...",
  type = "Round Robin",
  team = "Solo",
  isFeatured = true,
  status = "Upcoming",
}) {
  return (
    <>
      <div className="flex max-w-sm cursor-pointer flex-col-reverse justify-between rounded-lg bg-gradient-to-b from-primary04-800/15 to-primary04-800/50 backdrop-blur-xl transition-all duration-300 hover:scale-95 hover:shadow-glow focus:scale-95 focus:shadow-glow md:max-w-2xl md:flex-row lg:max-w-4xl">
        <div className="flex min-w-60 flex-col items-center justify-center gap-4 self-stretch p-4 lg:min-w-96 lg:p-6">
          <div className="flex flex-wrap gap-1 self-stretch lg:gap-2">
            <Badge label={type} />
            <Badge label={team} />
            {isFeatured && <Badge label="Featured" />}
            <Badge label={status + ` Event`} />
          </div>
          <p className="max-w-prose self-start font-body text-base text-primary04-100 md:self-center lg:text-lg xl:text-xl">
            {description}
          </p>
        </div>
        <ImageCard
          bgID={bgID}
          title={title}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
    </>
  );
}

export default EventCard;
