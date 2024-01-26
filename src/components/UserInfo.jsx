function UserInfo({
  userName = "username",
  useravatar = "bg-avatar3",
  variant = "success",
  orientation
}) {
  console.log(useravatar);

  return (
    <>
      <div className={`flex flex-1 items-center justify-center gap-1 ${orientation === "row" ? "flex-row gap-2" : "flex-col"}`}>
        <div
          className={`${useravatar} size-7 bg-cover bg-center bg-no-repeat md:size-10 lg:size-14 xl:size-16`}
        ></div>
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
