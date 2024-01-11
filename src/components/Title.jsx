function Title({ children = "Title" }) {
  return (
    <>
      <p className="font-body text-lg font-bold text-primary04-100 md:text-xl lg:text-2xl xl:text-3xl">
        {children}
      </p>
    </>
  );
}

export default Title;
