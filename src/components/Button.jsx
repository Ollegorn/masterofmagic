function Button({ children = "Button", onClick, variant = "primary" }) {
  return (
    <>
      <button
        className={
          variant === "secondary"
            ? `hover:shadow-glow inline-flex items-center justify-center self-start rounded border-2 border-solid border-primary04-500 px-6 py-3 font-body text-sm font-semibold  text-primary04-500 backdrop-blur-xl transition-all hover:-translate-y-1  hover:border-primary04-300 hover:text-primary04-300 lg:px-8 lg:py-4  lg:text-base xl:px-9 xl:py-5 xl:text-lg`
            : `inline-flex items-center justify-center self-start rounded bg-primary04-800 px-6 py-3 font-body text-sm  font-semibold text-primary04-50 transition-all hover:-translate-y-1  hover:bg-primary04-700 hover:drop-shadow-lg lg:px-8 lg:py-4  lg:text-base xl:px-9 xl:py-5 xl:text-lg`
        }
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
