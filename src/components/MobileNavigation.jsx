import React, { useEffect } from "react";
import logolg from "../assets/logolg.svg";
import { Link } from "react-router-dom";
import { usePrimaryLinks } from "../hooks/useNavigationLinks";
import Button from './Button';




function MobileNavigation({ show, onClose }) {
  const navItems = usePrimaryLinks();
  
  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [show]);

  const onItemClick = (e) => {
    e.stopPropagation();
    onClose();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  const onCloseButtonClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 bg-Neutral-900/60 
      ${show ? "flex" : "pointer-events-none hidden"}`}
    >
      <div className="fixed w-full z-50 bg-gradient-to-t from-Neutral-500/15 to-Neutral-800/15 drop-shadow-md backdrop-blur-xl rounded-b-3xl">
        <div className="flex flex-col items-center gap-8 w-full pr-4 pb-12 pl-4">
          <div className="flex justify-end items-center gap-2 self-stretch text-neutral-50 text-4xl">
            <button className="flex pt-1 pr-2.5 justify-center items-center" onClick={onCloseButtonClick}>
              &times;
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/" onClick={onItemClick}>
                <img src={logolg} alt="Master of Magic logo" className="cursor-pointer"/>
            </Link>
          </div>
          <div class="h-px w-full rounded bg-gradient-to-r from-primary04-500 to-primary04-100 sm:w-3/4 md:w-1/2"></div>
          <div className="flex py-3 px-0 flex-col items-center gap-4 self-stretch">
            <ul className="flex flex-col list-none items-center gap-4 lg:gap-6">
                  {navItems.map((item) => (
                    <li
                      id={item.id}
                      className={
                        item.isVisible
                          ? `text-md font-body font-semibold text-Neutral-300 hover:text-Neutral-50 py-2 lg:text-lg xl:text-xl`
                          : `hidden`
                      }
                    >
                      <Link to={item.path} onClick={onItemClick}>{item.page}</Link>
                    </li>
                  ))}
            </ul>
          </div>
          <div class="h-px w-full rounded bg-gradient-to-r from-primary04-500 to-primary04-100 sm:w-3/4 md:w-1/2"></div>
          <div className='flex py-3 px-6 justify-center self-stretch'>
            <Button className='mx-auto'>
              Log In
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavigation;
