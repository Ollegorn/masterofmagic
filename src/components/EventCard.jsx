import Badge from "./Badge";
import ImageCard from "./ImageCard";
import Button from "./Button";

function EventCard({
  bgID = 1,
  title = "Event Name",
  startDate = "01.01.2024",
  endDate = "14.01.2024",
  description = "Event Description...",
  type = "Round Robin",
  team = "Solo",
  isFeatured = false,
  status = "Upcoming",
  includeAction = false,
  includePrimaryAction = false,
  includeSecondaryAction = false,
  labelPrimary = "Primary Action",
  labelSecondary = "secondary Action",
  onClickPrimary,
  onClickSecondary,
}) {
  return (
    <>
     <div className="flex max-w-80 cursor-pointer flex-col-reverse justify-between rounded-lg bg-gradient-to-b from-primary04-800/15 to-primary04-800/50 backdrop-blur-xl transition-all duration-300 ease-in-out hover:shadow-glow focus:shadow-glow xs:max-w-sm md2:max-w-3xl md2:flex-row lg:max-w-4xl xl:max-w-5xl">
        <div className="flex min-w-32 flex-col items-center justify-center gap-4 self-stretch p-4 lg:min-w-96 lg:p-6">
          <div className="flex flex-wrap gap-1 self-stretch lg:gap-2">
            <Badge label={type} />
            <Badge label={team} />
            {isFeatured && <Badge label="Featured" />}
            <Badge label={status + ` Event`} />
          </div>
          <p className="max-w-prose self-start font-body text-base text-primary04-100 md:self-center lg:text-lg xl:text-xl">
            {description}
          </p>
          {includeAction ? (
            <div className="flex flex-col xs:flex-row items-center justify-between gap-4 self-stretch pt-4 lg:gap-6 lg:pt-6">
              {includeSecondaryAction ? (
                <Button
                  onClick={onClickSecondary}
                  className={`flex-1 w-full md2:w-auto`}
                  variant="secondary"
                >
                  {labelSecondary}
                </Button>
              ) : null}
              {includePrimaryAction ? (
                <Button onClick={onClickPrimary} className={`flex-1 w-full md2:w-auto`}>
                  {labelPrimary}
                </Button>
              ) : null}
            </div>
          ) : null}
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
