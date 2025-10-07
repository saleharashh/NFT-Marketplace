import { Artist } from "@/app/models/Artist";
import Link from "next/link";
import ArtistListItem from "./ArtistListItem";

export interface ArtistListData {
  data: Artist[];
}

export default function ArtistList({ data }: ArtistListData) {
  return (
    <>
      <table>
        <tr className="flex flex-row rounded-2xl justify-between items-start pr-10 pl-4 py-2 md:px-8 border border-secondary-background ">
          <td className="text-secondary-text w-1/12">#</td>
          <td className="text-secondary-text w-9/12 md:w-7/12 lg:w-5/12">
            Artist
          </td>
          <td className="hidden text-secondary-text md:flex w-2/12">Change</td>
          <td className="hidden text-secondary-text lg:flex w-2/12">
            NFTs Sold
          </td>
          <td className="text-secondary-text w-2/12">Volume</td>
        </tr>

        {data!.map((item, index) => (
          <ArtistListItem index={index} artist={item} key={index} />
        ))}
      </table>
    </>
  );
}
