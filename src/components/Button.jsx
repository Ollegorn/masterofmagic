function Button({ className, children = "Button", onClick, variant = "primary", isDisabled = false }) {
  return (
    <>
      <button
        className={ `${
          variant === "cta"
            ? `inline-flex items-center justify-center rounded border-2 animate-bounce border-solid border-primary04-500 from-primary04-400 to-primary04-100 px-4 py-2 font-body text-base font-semibold text-primary04-500 transition-all duration-300 hover:border-primary04-200 hover:bg-gradient-to-r hover:text-primary04-900 md2:px-6 md2:py-3 lg:px-8 lg:py-4 lg:text-lg xl:text-xl`
            : variant === "secondary"
              ? `inline-flex items-center justify-center self-start rounded border-2 border-solid border-primary04-500 px-4 py-2 font-body text-sm font-semibold text-primary04-500  backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary04-300  hover:text-primary04-300 hover:shadow-glow md2:px-6 md2:py-3 lg:px-8 lg:py-4 lg:text-base xl:text-lg`
              : `inline-flex items-center justify-center self-start rounded bg-primary04-800 px-4 py-2 font-body text-sm font-semibold text-primary04-50 transition-all hover:-translate-y-1  hover:bg-primary04-700 hover:drop-shadow-lg md2:px-6 md2:py-3  lg:px-8 lg:py-4 lg:text-base xl:text-lg`
        } ${className} ${isDisabled? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={onClick}
        disabled={isDisabled}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
