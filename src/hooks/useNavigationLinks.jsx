export function usePrimaryLinks() {
  return [
    {
      id: "01",
      page: "Home",
      path: "/",
      isVisible: false,
      bg: "bg-home-pattern",
    },
    {
      id: "02",
      page: "Tournament Hub",
      path: "/tournament_hub",
      isVisible: true,
      bg: "bg-home-pattern",
    },
    {
      id: "03",
      page: "Duelist Zone",
      path: "/duelist_zone",
      isVisible: true,
      bg: "bg-duellistZone-pattern",
    }, //!REPLACE THIS BOOLEAN EXPRESSION BY LOGIC THAT CHECKS IF USER IS LOGGED IN
    {
      id: "04",
      page: "Leaderboard",
      path: "/leaderboard",
      isVisible: true,
      bg: "bg-home-pattern",
    },
    {
      id: "05",
      page: "Rules",
      path: "/rules",
      isVisible: true,
      bg: "bg-home-pattern",
    },
  ];
}

export function useSecondaryLinks() {
  return [
    {
      id: "01",
      page: "FAQ",
      path: "/faq",
      isVisible: true,
    },
    {
      id: "02",
      page: "Support",
      path: "/support",
      isVisible: true,
    },
    {
      id: "03",
      page: "Account",
      path: "/account",
      isVisible: false,
    }, //!REPLACE THIS BOOLEAN EXPRESSION 'false' BY LOGIC THAT CHECKS IF USER IS LOGGED IN
  ];
}
