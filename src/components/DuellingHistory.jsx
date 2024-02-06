import DuelListItem from "./DuelListItem";
import Title from "./Title";
import { Tab } from "@headlessui/react";

function DuellingHistory({ duels, userId }) {
  const wins = duels.filter(
    (d) => d.duelWins > d.duelDefeats
  );
  const losses = duels.filter(
    (d) => d.duelWins < d.duelDefeats
  );
  
  
  return (
    <>
      <div className="flex flex-col  gap-4 lg:gap-6">
        <Title>Duelling History</Title>
        {duels.length <= 0 ?(
          <p className="font-body text-sm text-neutral-400">Nothing here yet.</p>
        ):(
          <>
          <Tab.Group>
            <Tab.List
              className={`flex items-center justify-center self-stretch rounded-3xl bg-primary01-800 p-2 backdrop-blur-lg lg:p-3`}
            >
              <Tab
                className={`ui-selected:bg-primary01-400 flex h-12 flex-1 items-center justify-center gap-1 rounded-3xl sm:py-7 md:py-8 lg:py-9`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ui-selected:fill-primary01-900 ui-not-selected:fill-primary01-400 size-6 md:size-7 lg:size-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="ui-selected:text-primary01-900 ui-not-selected:text-primary01-400 font-body text-base font-semibold md:text-lg lg:text-xl xl:text-2xl">
                  All
                </p>
              </Tab>
              <Tab
                className={`ui-selected:bg-primary01-400 flex h-12 flex-1 items-center justify-center gap-1 rounded-3xl sm:py-7 md:py-8 lg:py-9`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ui-selected:fill-primary01-900 ui-not-selected:fill-primary01-400 size-6 md:size-7 lg:size-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="ui-selected:text-primary01-900 ui-not-selected:text-primary01-400 font-body text-base font-semibold md:text-lg lg:text-xl xl:text-2xl">
                  Won
                </p>
              </Tab>
              <Tab
                className={`ui-selected:bg-primary01-400 flex h-12 flex-1 items-center justify-center gap-1 rounded-3xl sm:py-7 md:py-8 lg:py-9`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ui-selected:fill-primary01-900 ui-not-selected:fill-primary01-400 size-6 md:size-7 lg:size-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="ui-selected:text-primary01-900 ui-not-selected:text-primary01-400 font-body text-base font-semibold md:text-lg lg:text-xl xl:text-2xl">
                  Lost
                </p>
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <ul className="flex flex-col gap-4">
                  {duels.map((d) => (
                    <DuelListItem
                      key={d.eventId}
                      player1={d.userOne}
                      player1Wins={d.duelWins}
                      player2={d.userTwo}
                      player2Wins={d.duelDefeats}
                      variant={
                        d.duelWins > d.duelDefeats
                          ? "success"
                          : "failure"
                      }
                    />
                  ))}
                </ul>
              </Tab.Panel>
              <Tab.Panel>
                <ul className="flex flex-col gap-4">
                  {wins.map((d) => (
                      <DuelListItem
                      key={d.eventId}
                      player1={d.userOne}
                      player1Wins={d.duelWins}
                      player2={d.userTwo}
                      player2Wins={d.duelDefeats}
                      variant={
                        d.duelWins > d.duelDefeats
                          ? "success"
                          : "failure"
                      }
                    />
                  ))}
                </ul>
              </Tab.Panel>
              <Tab.Panel>
                <ul className="flex flex-col gap-4">
                  {losses.map((d) => (
                      <DuelListItem
                      key={d.eventId}
                      player1={d.userOne}
                      player1Wins={d.duelWins}
                      player2={d.userTwo}
                      player2Wins={d.duelDefeats}
                      variant={
                        (userId === d.player1Id &&
                          d.player1Wins > d.player2Wins) ||
                        (userId === d.player2Id && d.player2Wins > d.player1Wins)
                          ? "success"
                          : "failure"
                      }
                    />
                  ))}
                </ul>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          </>
        )}
      </div>
    </>
  );
}

export default DuellingHistory;
