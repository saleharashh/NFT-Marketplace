import ArtistBadge from "@/app/components/ArtistBadge";
import Link from "next/link";

export default function TrendingCollectionItem() {
  return (
    <div className="min-w-smx 2xl:min-w-sm rounded-2xl  overflow-hidden bg-gray-900 flex flex-col gap-4 ">
      {/* <!-- Top big image --> */}

      <Link href={"/nft"}>
        <img
          // src=""
          alt="Big"
          className="w-full  aspect-square object-cover bg-primary rounded-2xl hover:scale-95 transition-all duration-300"
        />
      </Link>
      {/* <!-- Bottom grid of 3 --> */}
      <div className="grid grid-cols-3 gap-2 ">
        {/* <!-- Small image 1 --> */}
        <img
          alt="Small 1"
          className="aspect-square object-cover rounded-lg bg-primary hover:scale-95 transition-all duration-300"
        />

        {/* <!-- Small image 2 --> */}
        <div className="aspect-square object-cover rounded-lg bg-primary hover:scale-95 transition-all duration-300" />

        {/* <!-- Box with text --> */}
        <div className="aspect-square rounded-lg bg-purple-500 flex items-center justify-center text-white text-xl font-bold bg-primary hover:scale-95 transition-all duration-300">
          1025+
        </div>
      </div>
      <h1>DSGN Animals</h1>
      <ArtistBadge profileSrc="" artistName="qwe" artistId="0" />
    </div>
  );
}
