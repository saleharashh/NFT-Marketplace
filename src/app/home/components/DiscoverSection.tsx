import NFTCard, { NFT } from "@/app/components/NFTCard";
import { Eye } from "lucide-react";
import Link from "next/link";
import { it } from "node:test";
// import NFTCard from "../utils/NFTCard";

export interface DiscoverSecrtionData {
  topThreeNft: NFT[];
}

export default function DiscoverSecrtion({
  topThreeNft,
}: DiscoverSecrtionData) {
  return (
    <>
      <div className="mt-10 flex flex-col gap2 ">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl">Discover More NFTs</h1>
            <p>Explore New Trending NFTs</p>
          </div>
          <div className="flex flex-row gap-3">
            <Eye />
            <p>See All</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-between ">
          <Link href={"nft"} className="">
            <NFTCard {...topThreeNft[0]} />
          </Link>
          <Link href={"nft"} className="hidden md:block">
            <NFTCard {...topThreeNft[1]} />
          </Link>
          <Link href={"nft"} className="hidden lg:block ">
            <NFTCard {...topThreeNft[2]} />
          </Link>
          {/* {topThreeNft.map((item, index) => (
          
            <div className="flex flex-row gap-4">
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
}
