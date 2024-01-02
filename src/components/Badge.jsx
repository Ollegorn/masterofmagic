function Badge({ label = "Badge" }) {
  return (
    <>
      <div className="inline-flex items-start rounded-full bg-gradient-to-b from-primary04-900/10 to-primary04-500/30 px-2 py-1 backdrop-blur-xl">
        <p className="font-body text-xs text-primary04-300 lg:text-base">
          {label}
        </p>
      </div>
    </>
  );
}

export default Badge;
