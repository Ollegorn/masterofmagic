function ImageCard({
  bgID = 2,
  title = "Event Name",
  startDate = "01.01.2024",
  endDate = "14.01.2024",
  isClickable = false,
}) {
  return (
    <>
      <div
        className={`${
          bgID === 1
            ? `bg-event01`
            : bgID === 2
              ? `bg-event02`
              : bgID === 3
                ? `bg-event03`
                : bgID === 4
                  ? `bg-event04`
                  : bgID === 5
                    ? `bg-event05`
                    : bgID === 6
                      ? `bg-event06`
                      : bgID === 7
                        ? `bg-event07`
                        : bgID === 8
                          ? `bg-event08`
                          : bgID === 9
                            ? `bg-event09`
                            : `bg-event10`
        } ${
          isClickable
            ? `h-56 w-full cursor-pointer bg-cover sm:h-80 md:h-96 lg:h-svh lg:bg-fixed`
            : `aspect-video min-h-64 bg-cover md:min-h-72 lg:min-h-80 xl:min-h-96`
        } flex flex-col items-start justify-end overflow-hidden rounded-lg bg-center bg-no-repeat`}
      >
        <div className="flex flex-col items-start gap-1 self-stretch bg-gradient-to-b from-primary04-900/25 to-primary04-900/35 p-4 backdrop-blur-md">
          <h3
            className={`${
              isClickable
                ? `text-lg md:text-2xl lg:text-3xl xl:text-4xl`
                : `text-md md:text-lg lg:text-xl xl:text-2xl`
            } font-body font-bold text-primary04-50`}
          >
            {title}
          </h3>
          <p className="font-body text-sm font-medium text-primary04-100 md:text-base lg:text-lg xl:text-xl">{`${startDate} - ${endDate}`}</p>
        </div>
      </div>
    </>
  );
}

export default ImageCard;
