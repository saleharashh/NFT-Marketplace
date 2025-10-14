"use client";

import { useHomeStart } from "@/services/start_home_service";
import useScreenSizeItemsForArtists from "../hooks/ScreenSizeHook";
import HowItWorkSections from "./components/HowItWorkSections";
import DiscoverSecrtion from "./components/DiscoverSection";
import BrowseCategorySection from "./components/BrowseCategorySection";
import TopCreatorsSections from "./components/TopCreatorsSections";
import TrendingSections from "./components/TrendingSections";
import HeroSection from "./components/HeroSection";
import HomeLoadingSkeleton from "./components/HomeLoadingSkeleton";

export default function HomeClient() {
  const screenSize = useScreenSizeItemsForArtists();
  const { data, isLoading, isError, error } = useHomeStart(screenSize);
  console.log(data)
  if (isLoading)
    return (
      <div className="flex py-10 px-10 md:px-20 items-center justify-center ">
        <div className="w-full flex flex-col xl:px-50 2xl:px-70">
          <HomeLoadingSkeleton />
        </div>
      </div>
    );

  if (isError) return <>Error ...</>;
  return (
    <div className="flex py-10 px-10 md:px-20 items-center justify-center ">
      <div className="w-full flex flex-col xl:px-50 2xl:px-70">
        <HeroSection nft={data!.topNft} />
        <TrendingSections collections={data!.collections} />
        <TopCreatorsSections artists={data!.artists} />
        <BrowseCategorySection />
        <DiscoverSecrtion topThreeNft={data!.topThreeNft} />
        <HowItWorkSections />
      </div>
    </div>
  );
}
