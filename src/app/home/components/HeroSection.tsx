// "use client"; // needed if this is inside app/ in Next 13+

import { Rocket } from "lucide-react";
import HeroStaticsItem, { HeroStaticsItemType } from "./HeroStaticsItem";
import Link from "next/link";
import NFTCard from "@/app/components/NFTCard";
import { NFT } from "@/app/models/NFT";
// import { useRouter } from "next/navigation";

export interface HeroSectionData{
  nft:NFT
}

export default function HeroSection({nft}:HeroSectionData) {
  // const router = useRouter();

  const stats: HeroStaticsItemType[] = [
    { stat: "240K +", title: "Total Sale" },
    { stat: "100K +", title: "Actions" },
    { stat: "240K +", title: "Artists" },
  ];

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col w-full  md:flex-row md:justify-between gap-5 ">
          <div className="flex flex-col md:w-7/12 md:items-center md:justify-center gap-4">
            <h4 className="text-2xl md:text-4xl xl:text-6xl">
              Discover Digital Art & Collect NFTs
            </h4>
            <h1 className="text-white md:text-sm">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </h1>
            <div className="hidden sm:flex flex-col items-start w-full gap-4">
              <Link
                className="bg-primary w-full md:w-fit py-4 px-8 rounded-2xl"
                href={"/login"}
              >
                <div className="flex flex-row text-white gap-4 items-center justify-center">
                  <Rocket />
                  <p>Get Started</p>
                </div>
              </Link>
              <div className="flex flex-row gap-15 pt-10">
                {stats.map((item, index) => (
                  <HeroStaticsItem key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
          <div className="max-w-sm rounded-xl  overflow-hidden">
            <NFTCard {...nft  }/>
          </div>
        </div>

        <div className="md:hidden">
          <Link href={"/login"}>
            <button className="bg-primary w-full md:w-fit py-4 px-8 rounded-2xl">
              <div className="flex flex-row text-white gap-4 items-center justify-center">
                <Rocket />
                <p>Get Started</p>
              </div>
            </button>
          </Link>
          <div className="flex flex-row gap-10">
            {stats.map((item, index) => (
              <HeroStaticsItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
