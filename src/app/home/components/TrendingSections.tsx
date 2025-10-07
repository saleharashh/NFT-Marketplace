import TrendingCollectionItem from "./TrendingCollectionItem";

export default function TrendingSections() {
  return (
    <div className="flex flex-col gap-4 mt-10 py-10">
      <p className="text-2xl font-bold ">Trending Collection</p>
      <p className="text-sm">
        Checkout Our Weekly Updated Trending Collection.
      </p>
      <div className="flex flex-row items-center justify-between">
        <TrendingCollectionItem />
        <div className="hidden md:flex">
          <TrendingCollectionItem />
        </div>
        <div className="hidden xl:flex">
          <TrendingCollectionItem />
        </div>
      </div>
    </div>
  );
}
