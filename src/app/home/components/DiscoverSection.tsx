import NFTCard from "@/app/components/NFTCard";
import { Eye } from "lucide-react";
import Link from "next/link";
// import NFTCard from "../utils/NFTCard";

export default function DiscoverSecrtion() {
  const array: number[] = [1, 2, 3];
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
        <div className="mt-4 flex flex-col md:flex-row gap-2 items-center justify-between">
          {array.map((i) => (
            <Link href={"nft"}>
              <NFTCard key={i} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
