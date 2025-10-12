import { Artist } from "@/app/models/Artist";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { it } from "node:test";
import ArtistListItem from "./ArtistListItem";

export interface TopCreatorsSectionsData {
  artists: Artist[];
}

export default function TopCreatorsSections({
  artists,
}: TopCreatorsSectionsData) {
  return (
    <>
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex flex-col justify-between">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-xl">Top Creators</h1>
              <p className="text-sm">
                Checkout Top Rated Creators On The NFT Marketplacer
              </p>
            </div>
            <div className="hidden md:flex flex-row justify-center items-center rounded-2xl border-primary border px-8 py-2 gap-4">
              <Rocket />
              <p>View Rankings</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {artists.map((item, index) => (
              <ArtistListItem {...item} key={index} />
            ))}
          </div>
          <div className="mt-4 flex sm:hidden flex-row justify-center items-center rounded-2xl border-primary border px-8 py-2 gap-4">
            <Rocket />
            <p>View Rankings</p>
          </div>
        </div>
      </div>
    </>
  );
}
