function UserInfo({
  userName = "username",
  useravatar = "bg-avatar01",
  variant = "success",
}) {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center gap-1">
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
