import SectionHeader from "./SectionHeader";
import TextCard from "./TextCard";
import Hat from "../assets/mdi_wizard-hat.svg";
import Tournament from "../assets/tabler_tournament.svg";
import Reward from "../assets/material-symbols_rewarded-ads.svg";
import { useScreenSize, breakPoint } from "../hooks/useScreenSize";

function SectionRules() {
  const screen = useScreenSize();
  return (
    <>
      <section className="w-full px-4 md:px-8 lg:px-6">
        <SectionHeader
          heading="How It Works"
          isActionable={screen.width > breakPoint.md ? true : false}
          includeSecondaryAction
          labelSeconary="Join A Tournament"
        />
        <div className="flex flex-col gap-4 py-4 md:flex-row md:py-8 lg:gap-6 lg:py-16">
          <TextCard
            icon={Hat}
            title="Step 1"
            text="Sign Up – Create your magical profile."
          />
          <TextCard
            icon={Tournament}
            title="Step 2"
            text="Choose a Tournament – Pick from a variety of dueling events."
          />
          <TextCard
            icon={Reward}
            title="Step 3"
            text="Compete & Win – Duel with others and climb the leaderboard."
          />
        </div>
      </section>
    </>
  );
}

export default SectionRules;
