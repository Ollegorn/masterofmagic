import Footer from "../components/Footer";
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
        <section className="flex w-full flex-col gap-4 bg-hero-pattern bg-cover bg-fixed bg-center bg-no-repeat px-4 py-24 md:px-8 lg:gap-6 lg:px-6 lg:py-40">
          <div className=" flex flex-1 flex-col items-center justify-center gap-4 self-stretch lg:gap-6">
            <svg viewBox="0 0 50 16" className="w-full">
              <text
                className="font-body"
                x="0"
                y="15"
                fill="url(#paint0_linear_12_795)"
              >
                Master
              </text>
              <defs>
                <linearGradient
                  id="paint0_linear_12_795"
                  x1="30.876"
                  y1="0.765625"
                  x2="2.29087"
                  y2="8.2084"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.421875" stop-color="#C2C2AD" />
                  <stop offset="0.588542" stop-color="#81805F" />
                  <stop offset="0.917708" stop-color="#81805F" />
                </linearGradient>
              </defs>
            </svg>

            <svg viewBox="0 0 73 19" className="w-full">
              <text
                className="font-body"
                x="0"
                y="15"
                fill="url(#paint0_linear_12_795)"
              >
                The Magic
              </text>
              <defs>
                <linearGradient
                  id="paint0_linear_12_795"
                  x1="30.876"
                  y1="0.765625"
                  x2="2.29087"
                  y2="8.2084"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.421875" stop-color="#C2C2AD" />
                  <stop offset="0.588542" stop-color="#81805F" />
                  <stop offset="0.917708" stop-color="#81805F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Home;
