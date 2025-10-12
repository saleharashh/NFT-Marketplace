import { Copy, Globe, Plus, TwitchIcon, Twitter, Youtube } from "lucide-react";
import ArtistStatItem, { ArtistStatItemType } from "./ArtistStatItem";
import OutlinedRoundedButton from "@/app/components/OutlinedRoundedButton";
import FilledRoundedButton from "@/app/components/FilledRoundedButton";
import ArtsitStatItemSkeleton from "./ArtistStatItemSkeleton";
import FilledRoundedButtonSkeleton from "@/app/components/FilledRoundedButtonSkeleton";
import OutlinedRoundedButtonSkeleton from "@/app/components/OutlinedRoundedButtonSkeleton";
const ArtistLoadingSkeleton = () => {
  const artistStats: number[] = [1, 2, 3];
  return (
    <div className="flex flex-col">
      <div className="relative">
        {/* Hero Image */}
        <div
          className="w-full h-64 object-cover bg-secondary-background" // adjust h-64 to your height
        />

        {/* Floating Card / Avatar */}
        <div
          className="
          absolute 
          left-1/2 
          lg:left-60
          md:left-16 md:translate-x-0
          -bottom-16 
          transform -translate-x-1/2
          w-32 h-32 
          bg-gray-800 
          rounded-2xl 
          shadow-xl 
          overflow-hidden
        "
        >
          <div className="w-full h-full object-cover bg-secondary-background" />
        </div>
      </div>

      {/* <div className="lg:px-60"> */}
      <div className="flex flex-col items-start  gap-4 mt-20 px-60">
        <div className="flex flex-col w-full lg:flex-row lg:w-full lg:items-center gap-3 justify-between">
          <h1 className="text-2xl text-secondary-background bg-secondary-background rounded-xl">
            Alice Doe
          </h1>
          <div className="flex flex-col  md:flex-row items-stretch gap-3">
            <FilledRoundedButtonSkeleton />
            <OutlinedRoundedButtonSkeleton />
            {/* </OutlinedRoundedButtonSkeleton> */}
          </div>
        </div>
        <div className="flex flex-row w-full justify-between md:w-8/12 lg:w-4/12">
          {artistStats.map((index) => (
            <ArtsitStatItemSkeleton key={index} />
          ))}
        </div>
        <p className="text-secondary-background bg-secondary-background font-bold rounded-xl">
          Bio
        </p>
        <p className="text-secondary-background bg-secondary-background rounded-xl">
          Digital artist exploring surreal themes.
        </p>

        <p className="text-secondary-background bg-secondary-background font-bold rounded-xl">
          Links
        </p>
        <div className="flex flex-row gap-4">
          <div className="text-secondary-background bg-secondary-background w-8 h-8 rounded-full"></div>
          <div className="text-secondary-background bg-secondary-background w-8 h-8 rounded-full"></div>
          <div className="text-secondary-background bg-secondary-background w-8 h-8 rounded-full"></div>
          <div className="text-secondary-background bg-secondary-background w-8 h-8 rounded-full"></div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ArtistLoadingSkeleton;
