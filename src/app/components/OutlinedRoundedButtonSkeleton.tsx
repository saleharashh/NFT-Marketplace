const OutlinedRoundedButtonSkeleton = () => {
  return (
    <div
      className={`flex border-secondary-background animate-pulse border-2 flex-row py-4 px-10 rounded-2xl gap-2 items-center justify-center `}
    >
      <div className="bg-secondary-background rounded-xl w-8 h-8"> </div>
      <p className="bg-secondary-background rounded-sm w-15 h-5"> </p>
    </div>
  );
};

export default OutlinedRoundedButtonSkeleton;
