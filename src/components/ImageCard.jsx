function ImageCard({
  bgID = 2,
  title = "Event Name",
  startDate = "01.01.2024",
  endDate = "14.01.2024",
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
        } flex aspect-video min-h-64 flex-col items-start justify-end overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat md:min-h-72 lg:min-h-80 xl:min-h-96`}
      >
        <div className="flex flex-col items-start gap-1 self-stretch bg-gradient-to-b from-primary04-500/5 to-primary04-300/35 p-4 backdrop-blur-md">
          <h3 className="text-md font-body font-medium text-primary04-50 md:text-lg lg:text-xl xl:text-2xl">
            {title}
          </h3>
          <p className="font-body text-sm font-medium text-primary04-100 md:text-base lg:text-lg xl:text-xl">{`${startDate} - ${endDate}`}</p>
        </div>
      </div>
    </>
  );
}

export default ImageCard;
