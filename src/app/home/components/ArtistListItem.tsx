import { Artist } from "@/app/models/Artist";
import { hoverAnimation } from "@/utils";
import Link from "next/link";

export default function ArtistListItem(artist: Artist) {
  return (
    <Link
      href={{ pathname: "/artist", query: { id: artist.id.toString() } }}
      className={`flex lg:flex-col  lg:items-center lg:justify-center w-full items-center gap-3 bg-gray-800 rounded-lg px-4 py-2 bg-secondary-background ${hoverAnimation}`}
    >
      <img
        src={`http://localhost:3000/uploads/${artist.profileImage}`}
        className="w-12 h-12 lg:w-24 lg:h-24 rounded-full "
      />
      <div className=" flex flex-col items-center justify-center gap-2">
        <h3 className="text-white font-semibold">{artist.name}</h3>
        <div className="flex flex-row">
          <p className="text-secondary-text text-sm">
            Total Sales:
            <span className="text-white font-medium">
              {artist.nftSolds} ETH
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}
