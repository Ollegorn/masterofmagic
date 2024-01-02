import SectionHeader from "./SectionHeader";
import Wand from "../assets/mdi_wand.svg";
import Tournament from "../assets/tabler_tournament.svg";
import TextCard from "./TextCard";

function SectionFeatured() {
  return (
    <>
      <section className="flex w-full flex-col gap-4 px-4 md:px-8 lg:gap-6 lg:px-6">
        <SectionHeader heading="" />
        <div className="flex flex-col gap-4 md:flex-row lg:gap-6">
          <TextCard
            icon={Wand}
            title="Become A Master Duellist"
            text="Engage in spellbinding tournaments, rise through the ranks, and become part of a magical community."
            reversed
          />
          <TextCard
            icon={Tournament}
            title="Organize Your Own Tournaments"
            text="With intuitive tournament management, real-time leaderboards, and a vibrant community, immerse yourself in the spellbinding world of competitive magic."
          />
        </div>
      </section>
    </>
  );
}

export default SectionFeatured;
