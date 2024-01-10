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
      isParticipant: true, //! PLACEHOLDER FOR DEVELOPMENT, NEEDS TO BE REPLACED BY ARRAY OF PARTICIPANT IDs
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
      isParticipant: true, //! PLACEHOLDER FOR DEVELOPMENT, NEEDS TO BE REPLACED BY ARRAY OF PARTICIPANT IDs
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
      isParticipant: true, //! PLACEHOLDER FOR DEVELOPMENT, NEEDS TO BE REPLACED BY ARRAY OF PARTICIPANT IDs
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

export default useEvents;
