function useUsers(userId) {
  const users = [
    {
      userId: 1,
      username: "wzrdFace",
      userAvatar: "bg-avatar01",
      mail: "wzrdFace@gmail.com",
    },
    {
      userId: 2,
      username: "artsyLottie",
      userAvatar: "bg-avatar02",
      mail: "artsyLottie@gmail.com",
    },
    {
      userId: 3,
      username: "cowardLion",
      userAvatar: "bg-avatar03",
      mail: "cowardLion@gmail.com",
    },
    {
      userId: 4,
      username: "magicFeather",
      userAvatar: "bg-avatar04",
      mail: "magicFeather@gmail.com",
    },
    {
      userId: 5,
      username: "KevKev",
      userAvatar: "bg-avatar05",
      mail: "KevKev@gmail.com",
    },
    {
      userId: 6,
      username: "NotMyProblem",
      userAvatar: "bg-avatar06",
      mail: "NotMyProblem@gmail.com",
    },
    {
      userId: 7,
      username: "quidRobbin",
      userAvatar: "bg-avatar07",
      mail: "quidRobbin@gmail.com",
    },
    {
      userId: 8,
      username: "episkey",
      userAvatar: "bg-avatar08",
      mail: "episkey@gmail.com",
    },
    {
      userId: 9,
      username: "witchIvy",
      userAvatar: "bg-avatar09",
      mail: "witchIvy@gmail.com",
    },
    {
      userId: 10,
      username: "azkaDan",
      userAvatar: "bg-avatar10",
      mail: "azkaDan@gmail.com",
    },
    {
      userId: 11,
      username: "bludgerQueen",
      userAvatar: "bg-avatar11",
      mail: "bludgerQueen@gmail.com",
    },
    {
      userId: 12,
      username: "cassCass",
      userAvatar: "bg-avatar12",
      mail: "cassCass@gmail.com",
    },
    {
      userId: 13,
      username: "classyCassie",
      userAvatar: "bg-avatar13",
      mail: "classyCassie@gmail.com",
    },
    {
      userId: 14,
      username: "goldeNiffler",
      userAvatar: "bg-avatar14",
      mail: "goldeNiffler@gmail.com",
    },
    {
      userId: 15,
      username: "col",
      userAvatar: "bg-avatar15",
      mail: "col@gmail.com",
    },
    {
      userId: 16,
      username: "fishy",
      userAvatar: "bg-avatar16",
      mail: "fishy@gmail.com",
    },
  ];

  return users.filter((u) => u.userId === userId);
}

export default useUsers;
