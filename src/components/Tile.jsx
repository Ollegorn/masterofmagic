function Tile({ icon, label = "label", value = 0, stretch = false }) {
  return (
    <>
      <div
        className={`${
          label === "Rank" && stretch
            ? `col-span-2`
            : stretch
              ? `col-span-1  sm:col-span-2`
              : `col-span-1`
        } flex flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-b from-primary01-900 to-primary01-800 p-4`}
      >
        <img src={icon} className="size-12 md:size-16 lg:size-24 xl:size-32" />
        <h3 className="inline-block bg-gradient-to-tr from-primary01-500 to-primary01-50 bg-clip-text font-display text-2xl text-transparent md:text-3xl lg:text-4xl xl:text-5xl">
          {label + " " + value}
        </h3>
      </div>
    </>
  );
}

export default Tile;
