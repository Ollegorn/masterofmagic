import UserInfo from "./UserInfo";
import useUsers from "../hooks/useUsers";

function DuelListItem({
  variant = "",
  player1Id = 1,
  player2Id = 2,
  player1Wins = 2,
  player2Wins = 1,
}) {
  const player1 = useUsers(player1Id);
  const player2 = useUsers(player2Id);
  return (
    <>
      <li
        className={`flex content-center items-center gap-3 self-stretch rounded-lg ${
          variant === "success"
            ? `bg-primary01-800`
            : variant === "failure"
              ? `bg-primary04-800`
              : `bg-Neutral-800`
        } px-3 py-2`}
      >
        <UserInfo
          userName={player1[0].username}
          useravatar={player1[0].userAvatar}
          variant={variant}
        />
        <div
          className={`flex items-center justify-center gap-1 rounded-lg ${
            variant === "success"
              ? `bg-primary01-400`
              : variant === "failure"
                ? `bg-primary04-400`
                : `bg-Neutral-500`
          } px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 xl:px-6 xl:py-5`}
        >
          <p
            className={`font-body text-lg font-bold md:text-xl lg:text-2xl ${
              variant === "success"
                ? `text-primary01-900`
                : variant === "failure"
                  ? `text-primary04-900`
                  : `text-Neutral-900`
            }`}
          >
            {`${player1Wins !== 0 && player2Wins !== 0 ? player1Wins : "-"} - ${
              player1Wins !== 0 && player2Wins !== 0 ? player2Wins : "-"
            }`}
          </p>
        </div>
        <UserInfo
          userName={player2[0].username}
          useravatar={player2[0].userAvatar}
          variant={variant}
        />
      </li>
    </>
  );
}

export default DuelListItem;