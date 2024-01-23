import Button from "./Button";

function Header({
  heading = "Page Heading",
  description = "Page description",
  buttonLabel = "Button Label",
  isActionable = false,
  onClick,
  hasHeroImage = false,
}) {
  return (
    <>
      <section
        className={`flex w-full flex-col gap-4 ${
          hasHeroImage
            ? `bg-hero-pattern bg-cover bg-fixed bg-center bg-no-repeat`
            : ``
        } px-4 py-24 md:px-8 lg:gap-6 lg:px-6 lg:py-40`}
      >
        <div className="flex w-full max-w-[1512px] flex-col gap-4 self-center px-4 md:px-8 lg:gap-6 lg:px-6">
          <div className="flex w-full flex-col gap-2 sm:w-3/4 md:w-1/2 lg:gap-4">
            <h1 className="inline-block bg-gradient-to-r from-primary04-500 to-primary04-50 bg-clip-text font-display text-5xl text-transparent sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              {heading}
            </h1>
            <div className="h-px w-full my-4 rounded bg-gradient-to-r from-primary04-500 to-primary04-100 sm:w-3/4 md:w-1/2"></div>
            <p className="max-w-prose font-body text-base text-primary04-100 lg:text-lg xl:text-xl">
              {description}
            </p>
          </div>

          

          {isActionable && <Button onClick={onClick}>{buttonLabel}</Button>}
        </div>
      </section>
    </>
  );
}

export default Header;
