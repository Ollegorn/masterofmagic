import logosm from "/logosm.svg";
import logomd from "../assets/logomd.svg";
import logolg from "../assets/logolg.svg";
import logoxl from "../assets/logoxl.svg";
import { useScreenSize, breakPoint } from "../hooks/useScreenSize";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Outlet, Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { usePrimaryLinks } from "../hooks/useNavigationLinks";

function Navbar() {
  let location = useLocation();
  const navItems = usePrimaryLinks();
  const screen = useScreenSize();
  const logo =
    screen.width > breakPoint.md
      ? logomd
      : screen.width > breakPoint.lg
        ? logolg
        : screen.width > breakPoint.xl
          ? logoxl
          : logosm;
  const isSmallScreen = screen.width < breakPoint.md;
  return (
    <>
      <nav className="fixed z-50 flex w-full items-center justify-between border-b-2 border-solid border-Neutral-400/75 bg-gradient-to-t from-Neutral-500/15 to-Neutral-800/15 px-4 py-2 drop-shadow-md backdrop-blur-xl md:px-8 md:py-3 lg:px-6 lg:py-4">
        <Link to="/">
          <img
            src={logo}
            alt="Master of Magic logo"
            className="cursor-pointer"
          />
        </Link>

        {isSmallScreen &&
          navItems
            .filter((item) => item.path === location.pathname)
            .map((i) => (
              <p
                className="text-body text-lg font-semibold text-Neutral-50 sm:text-xl"
                id={i.id}
              >
                {i.page}
              </p>
            ))}

        {isSmallScreen && (
          <div className="inline-flex cursor-pointer items-center justify-center rounded-lg from-Neutral-900/50 to-Neutral-800/50 px-2 py-2 transition-all duration-300 hover:bg-gradient-to-br hover:backdrop-blur-xl focus:border focus:border-solid focus:border-Neutral-400 sm:px-4 sm:py-4">
            <Bars3Icon className="h-6 w-6 stroke-Neutral-100 transition-all duration-300 hover:stroke-Neutral-400 sm:h-7 sm:w-7" />
          </div>
        )}
        {!isSmallScreen && (
          <ul className="flex list-none items-center gap-4 lg:gap-6">
            {navItems.map((item) => (
              <li
                id={item.id}
                className={
                  item.isVisible
                    ? `text-md font-body font-semibold text-Neutral-300 hover:text-Neutral-50 lg:text-lg xl:text-xl`
                    : `hidden`
                }
              >
                <Link to={item.path}>{item.page}</Link>
              </li>
            ))}
          </ul>
        )}
        {!isSmallScreen && <Button variant="secondary">Log In</Button>}
      </nav>
      <div className="flex min-h-svh w-full flex-col items-start justify-start gap-4 bg-home-pattern bg-cover bg-center bg-no-repeat lg:gap-6">
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;
