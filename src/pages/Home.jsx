import { useState, useEffect } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionEvents from "../components/SectionEvents";
import SectionFeatured from "../components/SectionFeatured";
import SectionHighlights from "../components/SectionHighlights";
import SectionRules from "../components/SectionRules";
import { useTournaments } from "../hooks/useTournaments";
import { usePopup } from "../hooks/usePopup";
import Popup from "../components/Popup";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { useNavigate } from "react-router-dom";

function Home() {
  const { tournamentsData, loading, error, ongoingTournaments } = useTournaments();
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const [popupContent, setPopupContent] = useState(null);
  const isAuthenticated = document.cookie.includes("jwtToken");
  const navigate = useNavigate();

 const handleLogin = () => {
    if(!isAuthenticated){
      openPopup();
      setPopupContent("login");
    }
    else{
      navigate("/tournament_hub");
    }
  };


  const handleSignupClick = () => {
    setPopupContent("signup");
    openPopup();
  };

  const closePopupAndResetContent = () => {
    setPopupContent(null);
    closePopup();
  };

  const scrolToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  const handleSecondaryAction = () => {
    navigate("/tournament_hub");
    scrolToTop();
  };
  const handleOnClickInsideEventCard = () => {
    navigate("/leaderboard");
    scrolToTop();
  }

  return (
    <>
      <Header
        heading={`Step Into The Arena Of Magic`}
        description={`Welcome to MasterOfMagic, the ultimate platform for duelling
            enthusiasts in the Harry Potter Magic Awakened community.`}
        buttonLabel={`Begin Your Magical Journey`}
        isActionable
        hasHeroImage
        onClick={handleLogin}
      />
      <div className="flex w-full max-w-[1512px] flex-col gap-16 self-center lg:gap-32">
        
        <SectionFeatured />
        <SectionEvents 
          includeSecondaryAction
          tournaments={ongoingTournaments}
          onClickSecondary={handleSecondaryAction}
          onClick={handleOnClickInsideEventCard}
        />
        {/*<SectionHighlights /> */}
        <SectionRules 
          showPrimary={!isAuthenticated ? true : false}
          onClickPrimary={isAuthenticated ? null : handleSignupClick} 
          onClickSecondary={handleSecondaryAction}
        />
      </div>
      <section className="flex w-full flex-col items-start justify-center gap-4 bg-hero-pattern bg-cover bg-fixed bg-center bg-no-repeat px-4 py-24 md:px-8 lg:gap-6 lg:px-6 lg:py-40">
        <div className=" flex flex-1 flex-col items-center justify-center gap-4 self-stretch lg:gap-6">
          <svg viewBox="0.5 1 49 16" className="w-full hover:animate-pulse">
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

          <svg viewBox="0 0 73 19" className="w-full hover:animate-pulse">
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
          <Button variant="cta" onClick={handleLogin}>Begin Your Magical Journey</Button>
        </div>

        {popupContent === "login" && (
        <Popup title="Log In" show={isPopupOpen} onClose={closePopupAndResetContent}>
          <Login onSignupClick={handleSignupClick} closePopupOnSuccessLogin={closePopupAndResetContent}/>
        </Popup>
      )}

      {popupContent === "signup" && (
        <Popup title="Sign Up" show={isPopupOpen} onClose={closePopupAndResetContent}>
          <SignUp onLoginClick={handleLogin} />
        </Popup>
      )}

      </section>
      <div className="flex w-full max-w-[1512px] self-center pt-4 md:pt-6 lg:pt-16">
        <Footer />
      </div>
    </>
  );
}

export default Home;
