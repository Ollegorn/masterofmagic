import useHighlights from "../hooks/useHighlights";
import SectionHeader from "./SectionHeader";
import YTVideo from "./YTVideo";

function SectionHighlights() {
  const highlights = useHighlights();
  return (
    <>
      <section className="w-full px-4 md:px-8 lg:px-6">
        <SectionHeader heading="Highlights" />
        <div className="flex w-full flex-wrap justify-center gap-4 py-4 md:py-8 lg:gap-6 lg:py-16">
          {highlights
            .filter((highlight) => highlight.isVisible)
            .map((highlight) => (
              <YTVideo key={highlight.id} url={highlight.url} />
            ))}
        </div>
      </section>
    </>
  );
}

export default SectionHighlights;
