import { useScreenSize, breakPoint } from "../hooks/useScreenSize";

function useHighlights() {
  const screen = useScreenSize();
  const isLargeScreen = screen.width > breakPoint.lg;
  const highlights = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/_nekgDAdXAg?si=h5Xz7F8RBlbJd5lX",
      isVisible: true,
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/uYXLmAaI73c?si=cKPZwsTL48vSgeLy",
      isVisible: true,
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/vN6j531qFjQ?si=49r9fBKg_WlMll7p",
      isVisible: true,
    },
    {
      id: 4,
      url: "https://www.youtube.com/embed/uYXLmAaI73c?si=cKPZwsTL48vSgeLy",
      isVisible: true,
    },
    {
      id: 5,
      url: "https://www.youtube.com/embed/vN6j531qFjQ?si=49r9fBKg_WlMll7p",
      isVisible: true,
    },
    {
      id: 6,
      url: "https://www.youtube.com/embed/_nekgDAdXAg?si=h5Xz7F8RBlbJd5lX",
      isVisible: isLargeScreen,
    },
    {
      id: 7,
      url: "https://www.youtube.com/embed/uYXLmAaI73c?si=cKPZwsTL48vSgeLy",
      isVisible: isLargeScreen,
    },
  ];
  return highlights;
}

export default useHighlights;
