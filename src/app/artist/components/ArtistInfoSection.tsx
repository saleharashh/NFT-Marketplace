import {
  Copy,
  Globe,
  Network,
  Plus,
  Twitch,
  TwitchIcon,
  Twitter,
  Youtube,
} from "lucide-react";
import ArtistStatItem, { ArtistStatItemType } from "./ArtistStatItem";
import { Artist } from "@/app/models/Artist";
import { convertToTruncate } from "@/utils";

export default function ArtistInfoSection(artist: Artist) {
  const artistStats: ArtistStatItemType[] = [
    { title: "Volume", value: artist.volume + "K +" },
    { title: "NFTs Sold", value: artist.nftSolds + "K +" },
    { title: "Followers", value: artist.followers },
  ];
  return (
    <div className="flex flex-col items-start  gap-4 mt-20">
      <div className="flex flex-col w-full lg:flex-row lg:w-full lg:items-center gap-3 justify-between">
        <h1 className="text-2xl">{artist.name}</h1>
        <div className="flex flex-col  md:flex-row items-stretch gap-3">
          <div className="p-4 flex flex-row items-center justify-center bg-primary text-white rounded-2xl gap-4">
            <Copy />
            <p>{convertToTruncate(artist.walletAddres)}</p>
          </div>
          <div className="flex border-primary border-2 flex-row py-4 px-10 rounded-2xl gap-2 items-center justify-center">
            <Plus color="#a259ff" />
            <p>Follow</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between md:w-8/12 lg:w-4/12">
        {artistStats.map((item, index) => (
          <ArtistStatItem key={index} {...item} />
        ))}
      </div>
      <p className="text-secondary-text font-bold">Bio</p>
      <p>{artist.bio}</p>

      <p className="text-secondary-text font-bold">Links</p>
      <div className="flex flex-row gap-4">
        <Globe color="#858584" />
        <TwitchIcon color="#858584" />
        <Youtube color="#858584" />
        <Twitter color="#858584" />
      </div>
    </div>
  );
}
