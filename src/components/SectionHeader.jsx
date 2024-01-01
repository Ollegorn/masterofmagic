import Button from "./Button";

function SectionHeader({
  heading = "Section Title",
  isActionable = false,
  includeSecondaryAction = false,
  labelSeconary = "Secondary Button",
  onClickSecondary,
  includePrimaryAction = false,
  labelPrimary = "Primary Button",
  onClickPrimary,
}) {
  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full items-center justify-between gap-4 overflow-hidden lg:gap-6">
          <h2 className="inline-block bg-gradient-to-r from-primary04-500 to-primary04-50 bg-clip-text font-display text-4xl text-transparent sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            {heading}
          </h2>
          {isActionable && (
            <div className="flex gap-4 lg:gap-6">
              {includeSecondaryAction && (
                <Button variant="secondary" onClick={onClickSecondary}>
                  {labelSeconary}
                </Button>
              )}
              {includePrimaryAction && (
                <Button variant="primary" onClick={onClickPrimary}>
                  {labelPrimary}
                </Button>
              )}
            </div>
          )}
        </div>
        <div className="h-px w-full rounded bg-gradient-to-r from-primary04-500 to-primary04-100"></div>
      </div>
    </>
  );
}

export default SectionHeader;
