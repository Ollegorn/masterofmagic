function UserInfo({
  userName = "username",
  useravatar = 3, // Default avatar index
  variant = "success",
  orientation = "row"
}) {


  return (
    <>
      <div className={`flex flex-1 items-center justify-center gap-1 ${orientation === "row" ? "flex-row gap-2" : "flex-col"}`}>
        <img
          src={`./avatar${useravatar}.svg`}
          alt={`Avatar ${useravatar}`}
          className={`size-7 md:size-10 lg:size-14 xl:size-16`}
        />
        <p
          className={`text-ellipsis font-body text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ${
            variant === "success"
              ? `text-primary01-50`
              : variant === "failure"
                ? `text-primary04-50`
                : `text-Neutral-50`
          }`}
        >
          {userName}
        </p>
      </div>
    </>
  );
}

export default UserInfo;
