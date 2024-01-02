import Header from "../components/Header";
import SectionEvents from "../components/SectionEvents";
import SectionFeatured from "../components/SectionFeatured";
import SectionHighlights from "../components/SectionHighlights";
import SectionRules from "../components/SectionRules";

function Home() {
  return (
    <>
      <div className="flex w-full flex-col gap-16 lg:gap-32">
        <Header
          heading={`Step Into The Arena Of Magic`}
          description={`Welcome to MasterOfMagic, the ultimate platform for duelling
            enthusiasts in the Harry Potter Magic Awakened community.`}
          buttonLabel={`Begin Your Magical Journey`}
          isActionable
        />
        <SectionFeatured />
        <SectionEvents />
        <SectionHighlights />
        <SectionRules />
      </div>
    </>
  );
}

export default Home;
