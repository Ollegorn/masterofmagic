import Button from "./Button";

function Header({
  heading = "Page Heading",
  description = "Page description",
  buttonLabel = "Button Label",
  onClick,
}) {
  return (
    <>
      <section className="bg-hero-pattern flex w-svw flex-col gap-4 bg-cover bg-fixed bg-center bg-no-repeat px-4 py-24 md:px-8 lg:gap-6 lg:px-6 lg:py-40">
        <div className="w-100 flex flex-col gap-2 sm:w-3/4 md:w-1/2 lg:gap-4">
          <h1 className="inline-block bg-gradient-to-r from-primary04-500 to-primary04-50 bg-clip-text font-display text-5xl text-transparent sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            {heading}
          </h1>
          <p className="max-w-prose font-body text-base text-primary04-100 lg:text-lg xl:text-xl">
            {description}
          </p>
        </div>
        <div className="w-100 h-px bg-gradient-to-r from-primary04-500 to-primary04-100 sm:w-3/4 md:w-1/2"></div>
        <Button onClick={onClick}>{buttonLabel}</Button>
      </section>
    </>
  );
}

export default Header;
