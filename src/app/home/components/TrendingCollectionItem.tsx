import ArtistBadge from "@/app/components/ArtistBadge";
import { Collection } from "@/app/models/Collection";
import { hoverAnimation } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export interface TrendingCollectionItemData {
  collection: Collection;
}

export default function TrendingCollectionItem({
  collection,
}: TrendingCollectionItemData) {
  return (
    <div className="min-w-smx 2xl:min-w-sm rounded-2xl  overflow-hidden bg-gray-900 flex flex-col gap-4 ">
      <Link
        href={{
          pathname: `/nft`,
          query: { id: collection.nftIds[0] },
        }}
      >
        <Image
          src={`http://localhost:3000/uploads/${collection.imageIds[0]}`}
          alt="Big"
          className={`w-full  aspect-square object-cover bg-primary rounded-2xl ${hoverAnimation}`}
        />
      </Link>
      <div className="grid grid-cols-3 gap-2 ">
        <Image
          
          src={`http://localhost:3000/uploads/${collection.imageIds[1]}`}
          className={`aspect-square object-cover rounded-lg bg-primary hover:scale-95 ${hoverAnimation}`} alt={""}        />

        <Image
          src={`http://localhost:3000/uploads/${collection.imageIds[2]}`}
          className={`aspect-square object-cover rounded-lg bg-primary ${hoverAnimation}`} alt={""}        />

        <div
          className={`aspect-square rounded-lg bg-purple-500 flex items-center justify-center text-white text-xl font-bold bg-primary ${hoverAnimation}`}
        >
          1025+
        </div>
      </div>
      <h1>{collection.collectionName}</h1>
      <ArtistBadge
        profileSrc={`http://localhost:3000/uploads/${collection.artistProfilePicture}`}
        artistName={collection.artistName}
        artistId={collection.artistId.toString()}
      />
    </div>
  );
}
