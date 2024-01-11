function ImageCard({
  bgID = 2,
  title = "Event Name",
  startDate = "01.01.2024",
  endDate = "14.01.2024",
  isClickable = false,
  onClick,
}) {
  return (
    <>
      <div
        onClick={onClick}
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
            ? `h-[14rem] w-full cursor-pointer rounded-2xl bg-cover sm:h-[16rem] md:h-[18rem] lg:h-[20rem] xl:h-[22rem]`
            : `aspect-video min-h-64 rounded-lg bg-cover md:min-h-72 lg:min-h-80 xl:min-h-96`
        } flex flex-col items-start justify-end overflow-hidden bg-center bg-no-repeat`}
      >
        <div
          className={`${
            isClickable
              ? `px-4 py-4 backdrop-blur transition-all duration-300 hover:pt-8 hover:backdrop-blur-md md:py-6 md:hover:pt-12 lg:px-6 lg:py-8 lg:backdrop-blur-none lg:hover:pt-16 xl:py-16 xl:hover:pt-32`
              : `p-4 backdrop-blur-md`
          } flex flex-col items-start gap-1 self-stretch bg-gradient-to-b from-primary04-900/5 to-primary04-900/95`}
        >
          <h3
            className={`${
              isClickable
                ? `text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl`
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
