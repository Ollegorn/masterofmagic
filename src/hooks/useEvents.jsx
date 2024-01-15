function useEvents() {
  return [
    {
      id: 1,
      bgID: 4,
      title: "Epic Solo Tournament",
      startDate: "03.01.2024",
      endDate: "17.01.2024",
      description:
        "This tournament challenges individual wizards and witches to demonstrate their solo magical skills in a series of intense, one-on-one duels.",
      type: "Round Robin",
      team: "Solo",
      isFeatured: true,
      status: "Current",
      participants: [
        { userId: 1 },
        { userId: 2 },
        { userId: 3 },
        { userId: 4 },
        { userId: 5 },
        { userId: 6 },
        { userId: 7 },
        { userId: 8 },
        { userId: 9 },
        { userId: 10 },
        { userId: 11 },
        { userId: 12 },
        { userId: 13 },
        { userId: 14 },
        { userId: 15 },
        { userId: 16 },
      ],
    },
    {
      id: 1,
      bgID: 4,
      title: "Epic Solo Tournament",
      startDate: "03.01.2024",
      endDate: "17.01.2024",
      description:
        "This tournament challenges individual wizards and witches to demonstrate their solo magical skills in a series of intense, one-on-one duels.",
      type: "Round Robin",
      team: "Solo",
      isFeatured: true,
      status: "Current",
      participants: [
        { userId: 1 },
        { userId: 2 },
        { userId: 3 },
        { userId: 4 },
        { userId: 5 },
        { userId: 6 },
        { userId: 7 },
        { userId: 8 },
        { userId: 9 },
        { userId: 10 },
        { userId: 11 },
        { userId: 12 },
        { userId: 13 },
        { userId: 14 },
        { userId: 15 },
        { userId: 16 },
      ],
    },
    {
      id: 1,
      bgID: 4,
      title: "Epic Solo Tournament",
      startDate: "03.01.2024",
      endDate: "17.01.2024",
      description:
        "This tournament challenges individual wizards and witches to demonstrate their solo magical skills in a series of intense, one-on-one duels.",
      type: "Round Robin",
      team: "Solo",
      isFeatured: true,
      status: "Current",
      participants: [
        { userId: 1 },
        { userId: 2 },
        { userId: 3 },
        { userId: 4 },
        { userId: 5 },
        { userId: 6 },
        { userId: 7 },
        { userId: 8 },
        { userId: 9 },
        { userId: 10 },
        { userId: 11 },
        { userId: 12 },
        { userId: 13 },
        { userId: 14 },
        { userId: 15 },
        { userId: 16 },
      ],
    },
    {
      id: 1,
      bgID: 4,
      title: "Epic Solo Tournament",
      startDate: "03.01.2024",
      endDate: "17.01.2024",
      description:
        "This tournament challenges individual wizards and witches to demonstrate their solo magical skills in a series of intense, one-on-one duels.",
      type: "Round Robin",
      team: "Solo",
      isFeatured: true,
      status: "Current",
      participants: [
        { userId: 1 },
        { userId: 2 },
        { userId: 3 },
        { userId: 4 },
        { userId: 5 },
        { userId: 6 },
        { userId: 7 },
        { userId: 8 },
        { userId: 9 },
        { userId: 10 },
        { userId: 11 },
        { userId: 12 },
        { userId: 13 },
        { userId: 14 },
        { userId: 15 },
        { userId: 16 },
      ],
    },
    {
      id: 2,
      bgID: 3,
      title: "Azkaban Escape",
      startDate: "03.02.2024",
      endDate: "17.02.2024",
      description:
        "Navigate through the treacherous challenges of Azkaban in this Round Robin tournament. Outwit and outlast your opponents to claim victory!",
      type: "Round Robin",
      team: "Solo",
      isFeatured: true,
      status: "Upcoming",
      participants: [
        { userId: 1 },
        { userId: 2 },
        { userId: 3 },
        { userId: 4 },
        { userId: 5 },
        { userId: 6 },
        { userId: 7 },
        { userId: 8 },
        { userId: 9 },
        { userId: 10 },
        { userId: 11 },
        { userId: 12 },
        { userId: 13 },
        { userId: 14 },
        { userId: 15 },
        { userId: 16 },
      ],
    },
    {
      id: 3,
      bgID: 1,
      title: "Crazy Duo Tournament",
      startDate: "13.02.2024",
      endDate: "27.02.2024",
      description:
        "In this event, duellers team up in pairs to showcase their magical prowess. Navigate through challenging rounds, strategize with your partner, and aim for the win to receive special rewards.",
      type: "Round Robin",
      team: "Solo",
      isFeatured: false,
      status: "Upcoming",
      participants: [],
    },
  ];
}

export function useStats(eventId, userId) {
  const stats = [
    {
      eventId: 1,
      userId: 1,
      played: 10,
      points: 20,
      rank: 25,
      wins: 5,
      losses: 5,
    },
    {
      eventId: 1,
      userId: 2,
      played: 0,
      points: 0,
      rank: 0,
      wins: 0,
      losses: 0,
    },
  ];

  return stats.filter((s) => s.eventId === eventId && s.userId === userId);
}

export function useDuels(eventId, userId) {
  const duels = [
    { eventId: 1, player1Id: 1, player2Id: 2, player1Wins: 2, player2Wins: 1 },
    { eventId: 1, player1Id: 1, player2Id: 3, player1Wins: 1, player2Wins: 2 },
    { eventId: 1, player1Id: 1, player2Id: 4, player1Wins: 1, player2Wins: 2 },
    { eventId: 1, player1Id: 1, player2Id: 5, player1Wins: 2, player2Wins: 1 },
    { eventId: 1, player1Id: 1, player2Id: 6, player1Wins: 1, player2Wins: 2 },
    { eventId: 1, player1Id: 1, player2Id: 7, player1Wins: 2, player2Wins: 1 },
    { eventId: 1, player1Id: 1, player2Id: 8, player1Wins: 1, player2Wins: 2 },
    { eventId: 1, player1Id: 1, player2Id: 9, player1Wins: 2, player2Wins: 1 },
    { eventId: 1, player1Id: 1, player2Id: 10, player1Wins: 2, player2Wins: 1 },
    { eventId: 1, player1Id: 1, player2Id: 11, player1Wins: 1, player2Wins: 2 },
  ];

  return duels.filter(
    (d) =>
      d.eventId === eventId &&
      (d.player1Id === userId || d.player2Id === userId),
  );
}

export function useMatchUps(eventId, userId) {
  const matchups = [
    { eventId: 1, player1Id: 1, player2Id: 12, player1Wins: 0, player2Wins: 0 },
    { eventId: 1, player1Id: 1, player2Id: 13, player1Wins: 0, player2Wins: 0 },
    { eventId: 1, player1Id: 1, player2Id: 14, player1Wins: 0, player2Wins: 0 },
    { eventId: 1, player1Id: 1, player2Id: 15, player1Wins: 0, player2Wins: 0 },
    { eventId: 1, player1Id: 1, player2Id: 16, player1Wins: 0, player2Wins: 0 },
  ];

  return matchups.filter(
    (m) =>
      m.eventId === eventId &&
      (m.player1Id === userId || m.player2Id === userId),
  );
}

export default useEvents;
