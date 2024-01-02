function TextCard({
  icon,
  title = "Card Title",
  text = "Text content",
  reversed = false,
}) {
  return (
    <>
      <div
        className={`flex ${
          reversed ? `lg:flex-row-reverse` : ``
        } w-full flex-col rounded-lg bg-gradient-to-b from-primary04-800/15 to-primary04-800/50 backdrop-blur-xl lg:flex-row`}
      >
        <div className="flex items-center justify-center p-4 lg:p-6">
          <img
            className="h-16 w-16 md:h-20 md:w-20 lg:h-32 lg:w-32 xl:h-40 xl:w-40"
            src={icon}
          />
        </div>
        <div className="flex self-stretch flex-col items-start justify-center gap-2 p-4 lg:items-start lg:p-6">
          <h3 className="inline-block bg-gradient-to-r from-primary04-500 to-primary04-50 bg-clip-text font-display text-2xl text-transparent sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {title}
          </h3>
          <p className="max-w-prose font-body text-base text-primary04-100 lg:text-lg xl:text-xl">
            {text}
          </p>
        </div>
      </div>
    </>
  );
}

export default TextCard;
