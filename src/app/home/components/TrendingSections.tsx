import { Collection } from "@/app/models/Collection";
import TrendingCollectionItem from "./TrendingCollectionItem";

export interface TrendingSectionsData{
  collections:Collection[]
}

export default function TrendingSections({collections}:TrendingSectionsData) {
  return (
    <div className="flex flex-col gap-4 mt-10 py-10">
      <p className="text-2xl font-bold ">Trending Collection</p>
      <p className="text-sm">
        Checkout Our Weekly Updated Trending Collection.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-4">
        {collections.map((item,index)=><TrendingCollectionItem collection={item} key={index}/>)}
        </div>
    </div>
  );
}
