import { Artist } from "@/app/models/Artist";
import Link from "next/link";

export interface ArtistListItemData {
  artist: Artist;
  index: number;
}

export default function ArtistListItem({ artist, index }: ArtistListItemData) {
  return (
    <Link href={"/artist"}>
      <tr className="mt-2 flex flex-row rounded-2xl justify-between items-center py-4 px-8  bg-secondary-background hover:scale-95 transition-all duration-200 cursor-pointer">
        <td className="text-secondary-text w-1/12">{index}</td>
        <td className="text-secondary-text w-9/12 md:w-7/12 lg:w-5/12">
          <div className="flex flex-row items-center gap-4">
            <img
              src={`http://localhost:3000/uploads/${artist.profileImage}`}
              alt=""
              className="w-8 h-8 bg-primary rounded-full"
            />
            <p className="text-white font-bold">{artist.name}</p>
          </div>
        </td>
        <td className="hidden text-white md:flex w-2/12">+1.42%</td>
        <td className="hidden text-white lg:flex w-2/12 ">{artist.nftSolds}</td>
        <td className="text-white w-2/12">{artist.volume} ETH</td>
      </tr>
    </Link>
  );
}
