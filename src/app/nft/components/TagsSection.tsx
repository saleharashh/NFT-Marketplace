const TagsSection = () => {
  return (
    <div>
      <p className="text-secondary-text">Tags</p>
      <div className="flex flex-col lg:flex-row gap-4">
        <p className="bg-secondary-background w-fit px-5 py-2 rounded-full">
          Animation
        </p>
        <p className="bg-secondary-background w-fit px-5 py-2 rounded-full">
          Illustration
        </p>
        <p className="bg-secondary-background w-fit px-5 py-2 rounded-full">
          Moon
        </p>
      </div>
    </div>
  );
};

export default TagsSection