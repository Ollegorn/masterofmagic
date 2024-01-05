import logosm from "/logosm.svg";
import logomd from "../assets/logomd.svg";
import logolg from "../assets/logolg.svg";
import logoxl from "../assets/logoxl.svg";
import { useScreenSize, breakPoint } from "../hooks/useScreenSize";
import { Link } from "react-router-dom";
import {
  usePrimaryLinks,
  useSecondaryLinks,
} from "../hooks/useNavigationLinks";

function Footer() {
  const navItems = usePrimaryLinks();
  const navItemsSecondary = useSecondaryLinks();
  const screen = useScreenSize();
  const logo =
    screen.width > breakPoint.md
      ? logomd
      : screen.width > breakPoint.lg
        ? logolg
        : screen.width > breakPoint.xl
          ? logoxl
          : logosm;
  return (
    <>
      <footer className="flex w-full flex-col items-center justify-center gap-4 px-4 pb-16 md:px-8 lg:gap-6 lg:px-6 lg:pb-32">
        <Link to="/">
          <img
            src={logo}
            alt="Master of Magic logo"
            className="cursor-pointer scale-150 p-4"
          />
        </Link>

        <div className="h-px w-full rounded bg-gradient-to-r from-primary04-500 to-primary04-100"></div>

        <ul className="flex list-none flex-col items-center gap-4 md:flex-row lg:gap-6">
          {navItems.map((item) => (
            <li
              id={item.id}
              className={
                item.isVisible
                  ? `text-md font-body font-semibold text-primary04-500 hover:text-primary04-400 lg:text-lg xl:text-xl`
                  : `hidden`
              }
            >
              <Link to={item.path}>{item.page}</Link>
            </li>
          ))}
        </ul>

        <div className="h-px w-full rounded bg-gradient-to-r from-primary04-500 to-primary04-100"></div>

        <ul className="flex list-none flex-col items-center gap-4 md:flex-row lg:gap-6">
          {navItemsSecondary.map((item) => (
            <li
              id={item.id}
              className={
                item.isVisible
                  ? `lg:text-md font-body text-base font-semibold text-primary04-600 hover:text-primary04-500 xl:text-lg`
                  : `hidden`
              }
            >
              <Link to={item.path}>{item.page}</Link>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
}

export default Footer;
